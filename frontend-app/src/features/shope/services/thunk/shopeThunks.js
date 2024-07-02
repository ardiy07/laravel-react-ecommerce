import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../config/axiosInstance";

export const fecthShopeHeader = createAsyncThunk(
    'shope/fecthShopeHeader',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/shope-user');
            localStorage.setItem('ShopeUser', JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue(error.message);
        }
    }
)