import {configureStore} from "@reduxjs/toolkit";
import cardReducer from "./Features/CardSlice";

export const store = configureStore({
    reducer:{
        cardState:cardReducer
    }
})