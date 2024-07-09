import { createSlice } from "@reduxjs/toolkit"
import { fetchProductKupon } from "../thunks/homeThunks"

const initialState = {
    status: 'idle',
    error: null,
    data: [],
    message: ''
}

const productKuponSlice = createSlice({
    name: 'productKupon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductKupon.pending, (state) => {
                state.status = 'pending'
                state.error = null
                state.data = []
            })
            .addCase(fetchProductKupon.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data = action.payload.data
            })
            .addCase(fetchProductKupon.rejected, (state, action) => {
                state.status = 'failed'
                state.data = []
                state.error = action.payload
            })
    }
})

export default productKuponSlice.reducer