import { createSlice } from "@reduxjs/toolkit"
import { fetchDetailProduct } from "../thunks/productThunks"

const intialState = {
    status: 'idle',
    error: null,
    data: [],
}

const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState: intialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDetailProduct.pending, (state) => {
                state.status = 'pending'
                state.error = null
                state.data = []
            })
            .addCase(fetchDetailProduct.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                state.data = action.payload.data
            })
            .addCase(fetchDetailProduct.rejected, (state, action) => {
                state.status = 'failed'
                state.data = []
                state.error = action.payload
            })
    }
})

export default productDetailSlice.reducer