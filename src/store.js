import { configureStore } from "@reduxjs/toolkit";
import ToDoReducer from "./slice.js"

export let ToDoStore = configureStore({
    reducer: ToDoReducer
}
)