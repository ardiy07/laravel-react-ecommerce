import { createSlice } from "@reduxjs/toolkit";
import { fetchAuthRegister } from "../thunk/authThunks";

const intialState = {
    status: 'idle',
    error: false,
    message: [],
};

const registerSlice = createSlice({
    name: 'register',
    initialState: intialState,
    reducers: {
        resetRegister: (state) => {
            state.status = 'idle';
            state.error = false;
            state.message = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuthRegister.pending, (state) => {
                state.status = 'pending';
                state.error = false;
                state.message = '';
            })
            .addCase(fetchAuthRegister.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = false;
                state.message = action.payload.message;
            })
            .addCase(fetchAuthRegister.rejected, (state, action) => {
                state.status = 'failed';
                state.error = true;
                state.message = action.payload.errors;
            })
    }
})

export const { resetRegister } = registerSlice.actions
export default registerSlice.reducer