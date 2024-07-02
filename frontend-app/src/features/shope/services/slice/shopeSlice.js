import { createSlice } from "@reduxjs/toolkit";
import { fecthShopeHeader } from "../thunk/shopeThunks";

const initialState = {
    status: 'idle',
    error: null,
    message: '',
    dataShope: []
};

const shopeSlice = createSlice({
    name: 'shope',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fecthShopeHeader.pending, (state) => {
                state.status = 'pending';
                state.message = '';
            })
            .addCase(fecthShopeHeader.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = false;
                state.dataShope = action.payload;
            })
            .addCase(fecthShopeHeader.rejected, (state, action) => {
                state.status = 'failed';
                state.error = true;
                state.message = action.payload;
            })
    },
});

export default shopeSlice.reducer