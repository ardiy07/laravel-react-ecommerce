const localStorageMonitor = store => next => action => {
    const previousIsLogin = store.getState().login.isLogin;
    next(action);
  
    const currentIsLogin = store.getState().login.isLogin;
    if (previousIsLogin !== currentIsLogin) {
        const storedIsLogin = localStorage.getItem('isLogin');
        if (storedIsLogin !== String(currentIsLogin)) {
            localStorage.removeItem('authData');
        }
        localStorage.setItem('isLogin', String(currentIsLogin));
    }
};

export default localStorageMonitor;