import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../services/api";

export const fetchReviewsDetail = createAsyncThunk(
    'review/fechReviewsDetail',
    async (slug, { rejectWithValue }) => {
        try {
            const response = await api.getReview(slug);
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue(error.message);
        }
    }
)