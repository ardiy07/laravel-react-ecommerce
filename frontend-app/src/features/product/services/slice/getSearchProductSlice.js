import { createSlice } from "@reduxjs/toolkit"
import { fetchSearchResultProduct } from "../thunks/productThunks"

const initialState = {
    status: 'idle',
    error: null,
    message: '',
    data: [],
    meta: {}
}

const productSearchResult = createSlice({
    name: 'productSearchResult',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchResultProduct.pending, (state) => {
                state.status = 'pending'
                state.error = null
                state.data = []
            })
            .addCase(fetchSearchResultProduct.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                state.data = action.payload.data
                state.meta = action.payload.meta
            })
            .addCase(fetchSearchResultProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.data = [];
                state.error = action.payload
            })
    }
})

export default productSearchResult.reducer