import { configureStore } from "@reduxjs/toolkit";
import { APP_DEBUG } from "../config/env";
import { searchSlice } from "../features/templates";
import { shopeSlice } from "../features/shope";
import { profileSlice } from "../features/profile";
import { loginSlice, logoutSlice } from "../features/authentication";
import localStorageMonitor from "../middleware/localStorageMonitor";
import { promotionProductSlice, productHomeSlice } from "../features/home";


const store = configureStore({
    reducer: {
        login: loginSlice,
        logout: logoutSlice,
        productHome: productHomeSlice,
        search: searchSlice,
        shope: shopeSlice,
        profile: profileSlice,
        promotionProduct: promotionProductSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMonitor),
    devTools: APP_DEBUG,
});

export default store;
