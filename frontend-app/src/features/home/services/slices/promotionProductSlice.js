import { createSlice } from "@reduxjs/toolkit"
import { fetchProductPromotion } from "../thunks/homeThunks"

const initialState = {
    status: 'idle',
    error: null,
    data: [],
    message: '',
    promotion: []
}

const promotionProductSlice = createSlice({
    name: 'promotionProduct',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductPromotion.pending, (state) => {
                state.status = 'pending'
                state.error = null
                state.data = []
            })
            .addCase(fetchProductPromotion.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data = action.payload.data.products
                state.promotion = action.payload.data.promotion
            })
            .addCase(fetchProductPromotion.rejected, (state, action) => {
                state.status = 'failed'
                state.data = []
                state.error = action.payload
            })
    }
})

export default promotionProductSlice.reducer