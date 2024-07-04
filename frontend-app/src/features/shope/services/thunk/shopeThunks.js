import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../../services/api";

export const fecthShopeHeader = createAsyncThunk(
    'shope/fecthShopeHeader',
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.getShopeUser();
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                console.log(error.message);
            }
            return rejectWithValue(error.message);
        }
    }
)