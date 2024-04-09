import {createSlice} from '@reduxjs/toolkit'

const initialState = [];

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser(state, action){
            state.push(action.payload)
        },
        addLoggedIn(state, action){
            state.push(action.payload)
        },
        clearData(state) {
            state.data = [];
          },
       
}})

export const {addUser, addLoggedIn, clearData} = userSlice.actions;
export default userSlice.reducer;