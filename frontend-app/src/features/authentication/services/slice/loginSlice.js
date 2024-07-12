import { createSlice } from "@reduxjs/toolkit";
import { getItemLocalStorage, setItemLocalStorage } from "../../../../config/localStorageConfig";
import { fetchAuthLogin } from "../thunk/authThunks";

const initialState = {
    status: 'idle',
    error: null,
    message: '',
    isLogin: localStorage.getItem('isLogin') === 'true',
    token: getItemLocalStorage('authData') || null,
    dataUser: []
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLoginState: (state, action) => {
            state.token = action.payload;
            setItemLocalStorage('authData', action.payload);
        },
        resetLogin: (state) => {
            state.status = 'idle';
            state.error = null;
            state.message = '';
            state.isLogin = false;
            state.token = null;
            state.dataUser = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAuthLogin.pending, (state) => {
                state.status = 'pending';
                state.message = '';
            })
            .addCase(fetchAuthLogin.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = false;
                state.message = '';
                state.isLogin = true;
                state.token = action.payload.data;
                state.dataUser = action.payload.data;
                setItemLocalStorage('isLogin', true);
                setItemLocalStorage('authData', action.payload.data);
            })
            .addCase(fetchAuthLogin.rejected, (state, action) => {
                state.status = 'failed';
                state.error = true;
                state.token = null;
                setItemLocalStorage('isLogin', false);
                state.isLogin = false;
                state.message = action.payload.message;
            })
    },
});

export const { setLoginState, resetLogin } = loginSlice.actions;
export default loginSlice.reducer;