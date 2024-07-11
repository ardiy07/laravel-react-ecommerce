import promotionProductSlice from "./slices/promotionProductSlice";
import productHomeSlice from "./slices/productHomeSlice";
import productKuponSlice from "./slices/productKuponSlice";
import { fetchProductPromotion, fetchHomeProduct, fetchProductKupon } from "./thunks/homeThunks";

export { 
    promotionProductSlice,
    productHomeSlice,
    productKuponSlice,
    fetchProductPromotion,
    fetchHomeProduct,
    fetchProductKupon
}