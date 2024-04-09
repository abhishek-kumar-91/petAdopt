-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 09, 2024 at 01:35 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `petadopt`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `mobilenumber` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `name`, `address`, `mobilenumber`) VALUES
(1, 'Rahul', 'pune', '454444'),
(2, 'Ram Ratan', 'Pune India', '85858585'),
(3, 'Mintu', 'dighi, Pune', '3565854525'),
(4, 'Munna', 'BU Bhandari', '8798566554'),
(5, 'Munna', 'BU Bhandari', '8798566554'),
(6, 'Munna', 'BU Bhandari', '8798566554'),
(7, 'hello', 'Mumbia', '5445454'),
(8, 'Rakesh', 'Charohli', '8795612145'),
(9, 'Rajesh', 'Dighi', '8798545651');

-- --------------------------------------------------------

--
-- Table structure for table `signup`
--

CREATE TABLE `signup` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `signup`
--

INSERT INTO `signup` (`id`, `name`, `email`, `password`) VALUES
(1, 'Abhishek Kumar', 'abhishekssm@gmail.com', '12345678'),
(2, 'Raj sharma', 'raj@gmail.com', '123456789'),
(3, 'Raj sharma', 'raj@gmail.com', '123456789'),
(4, 'Vishal Sharma', 'vishal@gmail.com', '123456789'),
(5, 'Raj', 'raj@gmail.com', '45678945'),
(6, 'Raj', 'raj@gmail.com', '45678945'),
(7, 'Raj', 'raj@gmail.com', '45678945'),
(8, 'Raj', 'raj@gmail.com', '45678945'),
(9, 'Raj', 'raj@gmail.com', '45678945'),
(10, 'Raj', 'raj@gmail.com', '45678945'),
(11, 'Raj', '', '45678945'),
(12, 'Raj', '', '45678945'),
(13, 'Ramvilash', 'ram@gmail.com', '456789'),
(14, 'Dodq', 'dog@gmail.com', '12325'),
(15, 'dog', 'dog@gmail.com', 'lkjg'),
(16, 'dog', 'dog@gmail.com', 'kldalf;kjd'),
(17, 'dog', 'dog@gmail.com', 'dkjf;ad'),
(18, 'afgag', 'a@gmail.com', 'adf'),
(19, 'dog', 'gm@gmail.com', 'ddkflfjg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `signup`
--
ALTER TABLE `signup`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `signup`
--
ALTER TABLE `signup`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
