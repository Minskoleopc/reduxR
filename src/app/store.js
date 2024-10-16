import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer, // Register users reducer
    },
});

export default store


