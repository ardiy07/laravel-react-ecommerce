import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../services/api";

export const fetchHomeProduct = createAsyncThunk(
    'home/fetchHomeProduct',
    async ({query, limit, page}, { rejectWithValue }) => {
        try {
            const response = await api.getProductHome(query, limit, page);
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
            const response = await api.getProductKupon();
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue(error.message);
        }
    }
)

export const fetchProductTrending = createAsyncThunk(
    'home/fetchProductTrending',
    async (page, { rejectWithValue }) => {
        try {
            const response = await api.getProductTrending(page);
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue(error.message);
        }
    }
)