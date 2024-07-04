import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../services/api";

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


export const fetchProductPromotion = createAsyncThunk(
    'home/fetchProductPromotion',
    async (promotion, { rejectWithValue }) => {
        try {
            const response = await api.getProductPromotion('pengguna-baru');
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue(error.message);
        }
    }
)