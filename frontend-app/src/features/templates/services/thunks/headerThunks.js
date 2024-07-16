import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../../config/axiosInstance";
import api from "../../../../services/api";

export const fetchSearch = createAsyncThunk(
    'search/fetchSearch',
    async (keyword, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(`/product-search?query=${keyword}`);
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue(error.message);
        }
    }
)