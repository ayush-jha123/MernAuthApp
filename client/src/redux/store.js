import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './user/userSLice';
import {persistReducer,persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';//This save our data inside localo storage of browser

const rootReducer=combineReducers({user:userReducer})
const persistConfig={
    key:'root',
    version:1,
    storage,
}

const persistedReducer=persistReducer(persistConfig,rootReducer);

export const store=configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false,
    })
})

export const persistor=persistStore(store)