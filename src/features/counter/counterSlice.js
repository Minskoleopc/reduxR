import {createSlice} from '@reduxjs/toolkit'
import usersReducer from '../features/counter/counterSlice';

// create a slice for the counter
const counterSlice = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{

        // action
        increment:(state) =>{
            state.value + 1
        },
        decrement:(state)=>{
            state.value - 1
        },
        reset:(state)=>{
            state.value = 0
        }
    }
});

export const {increment,decrement,reset} = counterSlice.actions;
export default counterSlice.reducer;