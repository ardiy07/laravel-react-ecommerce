import promotionProductSlice from "./slices/promotionProductSlice";
import productHomeSlice from "./slices/productHomeSlice";
import productKuponSlice from "./slices/productKuponSlice";
import { fetchProductPromotion, fecthSearchProduct, fetchProductKupon } from "./thunks/homeThunks";

export { 
    promotionProductSlice,
    productHomeSlice,
    productKuponSlice,
    fetchProductPromotion,
    fecthSearchProduct,
    fetchProductKupon
}