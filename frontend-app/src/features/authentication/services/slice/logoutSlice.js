import { createSlice } from "@reduxjs/toolkit";
import { fetchAuthLogout } from "../thunk/authThunks";

const initialState = {
    status: 'idle',
    error: null,
    message: ''
};

const logoutSlice = createSlice({
    name: 'logout',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuthLogout.pending, (state) => {
                state.status = 'pending';
                state.message = '';
            })
            .addCase(fetchAuthLogout.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = false;
                state.message = '';
            })
            .addCase(fetchAuthLogout.rejected, (state, action) => {
                state.status = 'failed';
                state.error = true;
                state.message = action.payload.message;
            })  
    },
});

export default logoutSlice.reducer