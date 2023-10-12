import { configureStore } from "@reduxjs/toolkit";
import myReducer from "../settingReducers/todo/todoSlice";
export const store = configureStore({
    reducer: myReducer
});