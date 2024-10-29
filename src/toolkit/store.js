import { configureStore } from "@reduxjs/toolkit";
import projectSlice from '../toolkit/slider/projectSlice'

export const store = configureStore({
    reducer: {
        projectSlice,

    }
})
