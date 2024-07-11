import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../../services/api';

export const fetchAuthLogin = createAsyncThunk(
  'login/fetchAuthLogin',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await api.login({
        email,
        password,
      });
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
          const response = await api.logout();
          return response.data;
      } catch (error) {
          if (error.response && error.response.data) {
              return rejectWithValue(error.response.data);
          }
          return rejectWithValue(error.message);
      }
  }
);

export const fetchAuthRegister = createAsyncThunk(
  'auth/fetchAuthRegister',
  async ({ name, email, password }, { rejectWithValue }) => {
      try {
          const response = await api.register({
              name,
              email,
              password
          });
          return response.data;
      } catch (error) {
          if (error.response && error.response.data) {
              return rejectWithValue(error.response.data);
          }
          return rejectWithValue(error.message);
      }
  }
)