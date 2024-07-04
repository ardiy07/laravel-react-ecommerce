import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../services/api";

export const fecthProfile = createAsyncThunk(
    'profile/fecthProfile',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.getUser();
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue(error.message);
        }
    }
)