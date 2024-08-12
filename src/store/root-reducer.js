import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer";

export const rootReducer = combineReducers({
    // key-value pair of actual reducer function
    user: userReducer,
    categories: categoriesReducer,
});
