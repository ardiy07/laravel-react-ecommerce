import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../../config/axiosInstance';

export const fetchAuthLogin = createAsyncThunk(
  'login/fetchAuthLogin',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/login', {
        email,
        password,
      });
      const { authService, expired, status } = response.data;
      localStorage.setItem('authData', JSON.stringify({
        authService,
        expired,
        status
      }));
      return response.data;
      
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAuthLogout = createAsyncThunk(
  'auth/fetchAuthLogout',
  async (_, { rejectWithValue }) => {
      try {
          const response = await axiosInstance.post('/logout');
          localStorage.clear();
          return response.data;
      } catch (error) {
          if (error.response && error.response.data) {
              return rejectWithValue(error.response.data);
          }
          return rejectWithValue(error.message);
      }
  }
);
