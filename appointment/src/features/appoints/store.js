import { configureStore } from "@reduxjs/toolkit";
import appointReducer from './appointsSlice'

export default configureStore({
    reducer: {
        appoints: appointReducer
    }
})
