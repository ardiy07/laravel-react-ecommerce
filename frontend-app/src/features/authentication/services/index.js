import { fetchAuthLogin, fetchAuthLogout } from "./thunk/authThunks";
import loginSlice from "./slice/loginSlice";
import { setLoginState } from "./slice/loginSlice";
import logoutSlice from "./slice/logoutSlice"; 

export { 
    fetchAuthLogin,
    fetchAuthLogout,
    loginSlice,
    setLoginState,
    logoutSlice
}