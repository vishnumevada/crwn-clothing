import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
    // key-value pair of actual reducer function
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
});
