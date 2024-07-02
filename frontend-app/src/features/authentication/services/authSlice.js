import { createSlice } from '@reduxjs/toolkit';
import { fetchAuthLogin, fetchAuthLogout } from '../services/authThunks';

const initialState = {
  status: 'idle',
  error: null,
  isLogin: localStorage.getItem('isLogin') === 'true', // Ambil nilai 'isLogin' dari localStorage dan ubah ke boolean
  message: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthLogin.pending, (state) => {
        state.status = 'pending';
        state.message = '';
      })
      .addCase(fetchAuthLogin.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = false;
        localStorage.setItem('isLogin', 'true');
        state.isLogin = true;
        state.message = action.payload;
      })
      .addCase(fetchAuthLogin.rejected, (state, action) => {
        state.status = 'failed';
        state.error = true;
        localStorage.setItem('isLogin', 'false');
        state.isLogin = false;
        state.message = action.payload.message;
      })
      .addCase(fetchAuthLogout.pending, (state) => {
        state.status = 'pending';
        state.message = '';
      })
      .addCase(fetchAuthLogout.fulfilled, (state) => {
        state.status = 'idle';
        state.error = null;
        state.isLogin = false;
        state.idUser = null;
      })
      .addCase(fetchAuthLogout.rejected, (state, action) => {
        state.status = 'failed';
        state.error = true;
        state.message = action.payload;
      })
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
