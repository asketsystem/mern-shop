import { configureStore } from "@reduxjs/toolkit";
import { CaseReducer } from "./cartRedux";

export default configureStore({
    reducer: {
        cart: cartReducer,
    },
})