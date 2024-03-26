import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RootState {
    year: string;
    color: string;
    make: string;
    model: string;
}

const initialState: RootState = {
    year: "year",
    color: "color",
    make: "make",
    model: "model",
};

const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        // action is submitted elsewhere - written to state.name
        chooseYear: (state, action: PayloadAction<string>) => {
            state.year = action.payload;
        }, //All we're doing is setting the input to the state.year
        chooseColor: (state, action: PayloadAction<string>) => {
            state.color = action.payload;
        },
        chooseMake: (state, action: PayloadAction<string>) => {
            state.make = action.payload;
        },
        chooseModel: (state, action: PayloadAction<string>) => {
            state.model = action.payload;
        },
    },
});

export const reducer = rootSlice.reducer;
export const { chooseYear, chooseColor, chooseMake, chooseModel } = rootSlice.actions
