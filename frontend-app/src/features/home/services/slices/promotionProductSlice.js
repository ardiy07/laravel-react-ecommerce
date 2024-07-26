import { createSlice } from "@reduxjs/toolkit"
import { fetchProductPromotion } from "../thunks/homeThunks"

const initialState = {
    status: 'idle',
    error: null,
    products: [],
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
                state.products = []
                state.promotion = []
            })
            .addCase(fetchProductPromotion.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.products = action.payload.data[0].promotion.products
                state.promotion = action.payload.data[0].promotion
            })
            .addCase(fetchProductPromotion.rejected, (state, action) => {
                state.status = 'failed'
                state.products = []
                state.promotion = []
                state.error = action.payload
            })
    }
})

export default promotionProductSlice.reducer