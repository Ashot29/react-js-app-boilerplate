import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const testSlice = createSlice({
    name: 'testSlice',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
    }
})

export const {increment} = testSlice.actions;

export default testSlice.reducer;
