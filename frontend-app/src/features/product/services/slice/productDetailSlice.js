import { createSlice } from "@reduxjs/toolkit"
import { fetchDetailProduct } from "../thunks/productThunks"

const intialState = {
    status: 'idle',
    error: null,
    data: {},
    productSelected: {},
    loading: false
}

const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState: intialState,
    reducers: {
        setProductSelected: (state, action) => {
            state.productSelected = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDetailProduct.pending, (state) => {
                state.status = 'pending'
                state.error = null
                state.data = {}
            })
            .addCase(fetchDetailProduct.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.error = null
                state.data = action.payload.data
            })
            .addCase(fetchDetailProduct.rejected, (state, action) => {
                state.status = 'failed'
                state.data = {}
                state.error = action.payload
            })
    }
})

export const { setProductSelected, setLoading } = productDetailSlice.actions;
export default productDetailSlice.reducer