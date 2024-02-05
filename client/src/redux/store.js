import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user/userSLice';
export const store=configureStore({
    reducer:{user:userReducer},
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false,
    })
})