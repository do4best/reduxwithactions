import { configureStore } from "@reduxjs/toolkit";

import counterSlicer from "./counterSlicer.js";

export const store = configureStore({
    reducer: {
       counter: counterSlicer
    }
})