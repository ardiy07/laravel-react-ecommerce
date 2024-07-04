import { createSlice } from "@reduxjs/toolkit"
import { fecthSearchProduct } from "../thunks/homeThunks"

const initialState = {
    statusSearch: 'idle',
    errorSearch: null,
    dataSearch: {
        products: [],
        shops: []
    }
}

const producHomeSlice = createSlice({
    name: 'productHome',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fecthSearchProduct.pending, (state) => {
                state.statusSearch = 'pending'
                state.errorSearch = null
                state.dataSearch = { products: [], shops: [] };
            })
            .addCase(fecthSearchProduct.fulfilled, (state, action) => {
                state.statusSearch = 'succeeded'
                state.dataSearch = {
                    products: action.payload.products || [],
                    shops: action.payload.shops || []
                };
            })
            .addCase(fecthSearchProduct.rejected, (state, action) => {
                state.statusSearch = 'failed'
                state.dataSearch = { products: [], shops: [] };
                state.errorSearch = action.payload
            })
    }
})

export default producHomeSlice.reducer