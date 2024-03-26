// store is like a mini temporary in the middle database...

import { configureStore } from "@reduxjs/toolkit";
import { reducer } from './slices/rootSlice.ts'

export const store = configureStore({
    reducer,
    devTools: true
})