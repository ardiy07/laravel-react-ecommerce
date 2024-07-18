import { configureStore } from "@reduxjs/toolkit";
import { APP_DEBUG } from "../config/env";
import { searchSlice } from "../features/templates";
import { shopeSlice } from "../features/shope";
import { profileSlice } from "../features/profile";
import { loginSlice, logoutSlice, registerSlice } from "../features/authentication";
import localStorageMonitor from "../middleware/localStorageMonitor";
import { promotionProductSlice, productHomeSlice, productKuponSlice, productTrendingSlice } from "../features/home";
import { addCardSlice, cardGetSlice, getSearchProductSlice, productByShopeSlice, productDetailSlice } from "../features/product";


const store = configureStore({
    reducer: {
        // auth
        register: registerSlice,
        login: loginSlice,
        logout: logoutSlice,

        // home
        productHome: productHomeSlice,
        search: searchSlice,
        promotionProduct: promotionProductSlice,
        productKupon: productKuponSlice,
        productDetail: productDetailSlice,
        productTrending: productTrendingSlice,
        
        // card
        cardGetProduct: cardGetSlice,
        cardGet: cardGetSlice,
        addCard: addCardSlice,
        
        // shope
        shope: shopeSlice,
        
        // profile
        profile: profileSlice,
        
        // product
        productSearchResult: getSearchProductSlice,
        productShope: productByShopeSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMonitor),
    devTools: APP_DEBUG,
});

export default store;