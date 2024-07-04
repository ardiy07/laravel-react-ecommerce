import { createSlice } from "@reduxjs/toolkit";
import { fecthShopeHeader } from "../thunk/shopeThunks";
import { getItemLocalStorage, setItemLocalStorage } from "../../../../config/localStorageConfig";

const initialState = {
    status: 'idle',
    error: null,
    message: '',
    dataShope: getItemLocalStorage('dataShope')
};

const shopeSlice = createSlice({
    name: 'shope',
    initialState,
    reducers: {
        setDataShopeUser: (state, action) => {
            state.dataShope = action.payload;
        },
    },
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
                setItemLocalStorage('dataShope', state.dataShope);
            })
            .addCase(fecthShopeHeader.rejected, (state, action) => {
                state.status = 'failed';
                state.error = true;
                state.message = action.payload;
            })
    },
});

export const { setDataShopeUser } = shopeSlice.actions;
export default shopeSlice.reducer