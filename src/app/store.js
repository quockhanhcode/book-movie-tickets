import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './MovieReducer';


export const store = configureStore({
    reducer: {
        movie: movieReducer
    },
})