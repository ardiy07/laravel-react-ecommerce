import { createSlice } from "@reduxjs/toolkit";
import { fecthProfile } from "../thunks/profileThunks";
import { getItemLocalStorage } from "../../../../config/localStorageConfig";

const initialState = {
    status: 'idle',
    error: null,
    message: '',
    dataUser: getItemLocalStorage('dataUser')
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileDataUser: (state, action) => {
            state.dataUser = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fecthProfile.pending, (state) => {
                state.status = 'pending';
                state.message = '';
            })
            .addCase(fecthProfile.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = false;
                state.dataUser = action.payload; 
                localStorage.setItem('dataUser', JSON.stringify(state.dataUser));
            })
            .addCase(fecthProfile.rejected, (state, action) => {
                state.status = 'failed';
                state.error = true;
                state.message = action.payload;
            });
    },
});


export const { setProfileDataUser } = profileSlice.actions;
export default profileSlice.reducer;
