import { createSlice } from "@reduxjs/toolkit"
import { fetchHomeProduct } from "../thunks/homeThunks"


const initialState = {
    status: 'idle',
    error: null,
    data: [],
    meta: {}
}

const producHomeSlice = createSlice({
    name: 'productHome',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomeProduct.pending, (state) => {
                state.status = 'pending'
                state.error = null
                state.data = []
            })
            .addCase(fetchHomeProduct.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                state.data = action.payload.data
                state.meta = action.payload.meta
            })
            .addCase(fetchHomeProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.data = [];
                state.error = action.payload
            })
    }
})

export default producHomeSlice.reducer