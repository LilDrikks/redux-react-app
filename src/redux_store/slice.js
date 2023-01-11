import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'contador',
    initialState: 0,
    reducers: {
        //duas maneiras de implementar as actions
        incrementar(state){
           return state + 1
        },
        decrementar: (state) => state - 1
    }
})

export const {incrementar, decrementar} = slice.actions;

export default slice.reducer;