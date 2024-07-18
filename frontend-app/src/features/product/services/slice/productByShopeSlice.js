import { createSlice } from "@reduxjs/toolkit"
import { fetchProductByShope } from "../thunks/productThunks"

const initialState = {
    status: 'idle',
    data: [],
    meta: {},
    error: null,
}

const productByShopeSlice = createSlice({
    name: 'productByShope',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductByShope.pending, (state) => {
                state.status = 'pending'
                state.error = null
                state.data = []
            })
            .addCase(fetchProductByShope.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                state.data = action.payload.data
                state.meta = action.payload.meta
            })
            .addCase(fetchProductByShope.rejected, (state, action) => {
                state.status = 'failed';
                state.data = [];
                state.error = action.payload
            })
    }
})

export default productByShopeSlice.reducer