import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice"

const store = configureStore({    // first create store
    reducer:{                       
        todoSlice : TodoSlice, // first todoSlice is key for access data and second is file name TodoSlice
    }
})

export default store;