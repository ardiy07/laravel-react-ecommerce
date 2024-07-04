const localStorageMonitor = store => next => action => {
    const previousIsLogin = store.getState().login.isLogin;
    next(action); // Lanjutkan eksekusi aksi
  
    const currentIsLogin = store.getState().login.isLogin;
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

export default localStorageMonitor;