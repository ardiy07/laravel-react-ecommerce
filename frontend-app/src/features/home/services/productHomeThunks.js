import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../config/axiosInstance";

export const fecthSearchProduct = createAsyncThunk(
    'product/fetchSearchProduct',
    async (keyword, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(`/product/search?key=${keyword}`);
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue(error.message);
        }
    }
)