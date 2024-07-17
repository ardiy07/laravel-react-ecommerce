import promotionProductSlice from "./slices/promotionProductSlice";
import productHomeSlice from "./slices/productHomeSlice";
import productKuponSlice from "./slices/productKuponSlice";
import productTrendingSlice from "./slices/productTrendingSlice";
import { fetchProductPromotion, fetchHomeProduct, fetchProductKupon, fetchProductTrending } from "./thunks/homeThunks";

export { 
    promotionProductSlice,
    productHomeSlice,
    productKuponSlice,
    fetchProductPromotion,
    fetchHomeProduct,
    fetchProductKupon,
    fetchProductTrending,
    productTrendingSlice
}