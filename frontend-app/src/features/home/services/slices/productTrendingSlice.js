import { createSlice } from "@reduxjs/toolkit"
import { fetchProductTrending } from "../thunks/homeThunks"

const initialState = {
    status: 'idle',
    error: null,
    data: [],
    message: ''
}

const productTrendingSlice = createSlice({
    name: 'productTrending',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductTrending.pending, (state) => {
                state.status = 'pending',
                state.error = null,
                state.data = [],
                state.meta = []
            })
            .addCase(fetchProductTrending.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data = action.payload.data
                state.meta = action.payload.meta
            })
            .addCase(fetchProductTrending.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message,
                state.data = []
            })
    }
})

export default productTrendingSlice.reducer