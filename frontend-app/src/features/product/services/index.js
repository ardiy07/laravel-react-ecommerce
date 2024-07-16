import productDetailSlice from "./slice/productDetailSlice";
import cardGetSlice from "./slice/cardGetSlice";
import cardGetProductSlice from "./slice/cardGetProductSlice";
import addCardSlice from "./slice/addCardSlice";
import getSearchProductSlice from "./slice/getSearchProductSlice";
import { fetchSearchResultProduct, fetchDetailProduct, fetchGetCard, fetchGetCardProduct, fetchAddCard } from "./thunks/productThunks";

export {
    productDetailSlice,
    fetchDetailProduct,
    fetchGetCard,
    cardGetSlice,
    fetchGetCardProduct,
    cardGetProductSlice,
    fetchAddCard,
    addCardSlice,
    getSearchProductSlice
}
