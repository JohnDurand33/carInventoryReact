import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        year: 'year',
        color: 'color',
        make: 'make',
        model: 'model',
    },
    reducers: {
        // action is submitted elsewhere - written to state.name
        chooseYear: (state, action) => {state.year = action.payload}, //All we're doing is setting the input to the state.year
        chooseColor: (state, action) => { state.color = action.payload },
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => {state.model = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseYear, chooseColor, chooseMake, chooseModel } = rootSlice.actions
