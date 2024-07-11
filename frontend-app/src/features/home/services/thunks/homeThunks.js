import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../services/api";

export const fetchHomeProduct = createAsyncThunk(
    'home/fetchHomeProduct',
    async ({categori, limit, page}, { rejectWithValue }) => {
        try {
            const response = await api.getProductKupon(categori, limit, page);
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

export const fetchProductKupon = createAsyncThunk(
    'home/fetchProductKupon',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.getProductKupon('', 23, 1);
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue(error.message);
        }
    }
)