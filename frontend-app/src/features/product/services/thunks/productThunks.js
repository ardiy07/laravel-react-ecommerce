import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../services/api";

export const fetchDetailProduct = createAsyncThunk(
    'product/fetchDetailProduct',
    async (productSlug, { rejectWithValue }) => {
        try {
            const response = await api.getDetailProduct(productSlug);
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue(error.message);
        }
    }
)

export const fetchGetCard = createAsyncThunk(
    'product/fetchGetCard',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.getCard();
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue(error.message);
        }
    }
)

export const fetchAddCard = createAsyncThunk(
    'product/fetchAddCard',
    async (data, { rejectWithValue }) => {
        try {
            const response = await api.addCard(data);
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue(error.message);
        }
    }
)


export const fetchGetCardProduct = createAsyncThunk(
    'product/fetchGetCardProduct',
    async ({ userId, productId }, { rejectWithValue }) => {
        try {
            const response = await api.getCardProduct(productId, userId);
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue(error.message);
        }
    }
)

export const fetchSearchResultProduct = createAsyncThunk(
    'product/fetchSearchResultProduct',
    async ({ query, page }, { rejectWithValue }) => {
        try {
            const response = await api.getProductSearch(query, page);
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue(error.message);
        }
    }
)

export const fetchProductByShope = createAsyncThunk(
    'product/fetchProductByShope',
    async ({ shope, limit }, { rejectWithValue }) => {
        try {
            const response = await api.getProductByShope(shope, limit);
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue(error.message);
        }
    }
)