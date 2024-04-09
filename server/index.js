// Import required modules
const express = require('express');
const mysql = require('mysql');
const session = require('express-session');
const cors = require("cors")
// Create an Express app
const app = express();
app.use(cors());
app.use(express.json())

// Define port number
const PORT = 3000;

// Configure MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'petadopt'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected');
});

const oneDay = 24 * 60 * 60 * 1000; // 1 day in milliseconds
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: oneDay } // Set cookie expiration time
}));

function generateSessionId() {
    // Generate a random string as the session ID
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const sessionIdLength = 32; // You can adjust the length as needed
    let sessionId = '';
    
    for (let i = 0; i < sessionIdLength; i++) {
      sessionId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    return sessionId;
  }

// Login API
app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    if (email && password) {
      db.query('SELECT * FROM signup WHERE email = ? AND password = ?', [email, password], (err, results) => {
        if (err) {
          res.status(500).json({ error: 'Internal Server Error' });
        } else if (results.length > 0) {
            const user = results[0].name;
          req.session.loggedin = true;
          req.session.email = email;
          const sessionId = generateSessionId(); // Generate a unique session ID
          res.status(200).json({ message: 'Login successful', sessionId, username: user });
          // Include session ID in the response
        } else {
          res.status(401).json({ error: 'Invalid username or password' });
        }
      });
    } else {
      res.status(400).json({ error: 'Username and password are required' });
    }
  });
  
// Signup API
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
  
    // Check if the email already exists in the database
    db.query('SELECT * FROM signup WHERE email = ?', [email], (selectErr, selectResults) => {
      if (selectErr) {
        console.error('Error selecting user:', selectErr);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      if (selectResults.length > 0) {
        // If the email already exists, return an error
        return res.status(400).json({ error: 'Email already exists' });
      }
  
      // If the email doesn't exist, proceed with the signup process
      if (name && password) {
        db.query('INSERT INTO signup (name, email, password) VALUES (?, ?, ?)', [name, email, password], (insertErr, insertResults) => {
          if (insertErr) {
            console.error('Error inserting user:', insertErr);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
          
          console.log('User created successfully');
          return res.status(201).json({ message: 'User created successfully' });
        });
      } else {
        return res.status(400).json({ error: 'Name and password are required' });
      }
    });
  });
  
  

// Logout API
app.post('/logout', (req, res) => {
  if (req.session.loggedin) {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'Logout successful' });
      }
    });
  } else {
    res.status(401).json({ error: 'You are not logged in' });
  }
});

app.post('/orderplaced', (req, res) => {
  // Extract data from the request body
  const { name, address, mobilenumber } = req.body;

  // Insert the order data into the MySQL database
  db.query('INSERT INTO orders (name, address, mobilenumber) VALUES (?, ?, ?)', [name, address, mobilenumber], (error, results) => {
    if (error) {
      console.error('Error placing order:', error);
      res.status(500).json({ error: 'Failed to place order' });
    } else {
      console.log('Order placed successfully');
      res.status(200).json({ message: 'Order placed successfully' });
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
