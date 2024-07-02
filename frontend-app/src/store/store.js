import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authentication/services/authSlice";
import { APP_DEBUG } from "../config/env";
import productHomeSlice from "../features/home/services/productHomeSlice";
import { searchSlice } from "../features/templates";
import { shopeSlice } from "../features/shope";

const checkIsLoginMiddleware = store => next => action => {
    const previousIsLogin = store.getState().auth.isLogin;
    next(action); // Lanjutkan eksekusi aksi
  
    const currentIsLogin = store.getState().auth.isLogin;
    if (previousIsLogin !== currentIsLogin) {
        // Deteksi perubahan isLogin
        const storedIsLogin = localStorage.getItem('isLogin');
        if (storedIsLogin !== String(currentIsLogin)) {
            // Jika isLogin diubah secara manual, atur ulang atau hapus localStorage lainnya
            localStorage.removeItem('authData'); // Contoh atur ulang localStorage lainnya
        }
        // Update localStorage dengan nilai isLogin yang sah
        localStorage.setItem('isLogin', String(currentIsLogin));
    }
};

const store = configureStore({
    reducer: {
        auth: authSlice,
        productHome: productHomeSlice,
        search: searchSlice,
        shope: shopeSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(checkIsLoginMiddleware),
    devTools: APP_DEBUG,
});

export default store;
