import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../services/api";

export const fetchSearchAddress = createAsyncThunk(
    'address/fetchSearchAddress',
    async (query, { rejectWithValue }) => {
        try {
            const response = await api.getSearchAddres(query);
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue(error.message);
        }
    }
)