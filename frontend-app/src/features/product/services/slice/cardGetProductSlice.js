import { createSlice } from "@reduxjs/toolkit"
import { fetchGetCardProduct } from "../thunks/productThunks"

const initialState = {
    status: 'idle',
    data: [],
    error: null
}

const cardGetProductSlice = createSlice({
    name: 'cardGetProduct',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetCardProduct.pending, (state) => {
                state.status = 'pending'
                state.error = null
                state.data = []
            })
            .addCase(fetchGetCardProduct.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                state.data = action.payload
            })
            .addCase(fetchGetCardProduct.rejected, (state, action) => {
                state.status = 'failed'
                state.data = []
                state.error = action.payload
            })  
    }
})

export default cardGetProductSlice.reducer

