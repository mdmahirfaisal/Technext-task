import { configureStore } from '@reduxjs/toolkit'
import launchReducer from './slices/launchSlice'

export const store = configureStore({
    reducer: {
        launch: launchReducer,
    },
})