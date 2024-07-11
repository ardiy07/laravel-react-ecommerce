import { fetchAuthLogin, fetchAuthLogout, fetchAuthRegister } from "./thunk/authThunks";
import loginSlice from "./slice/loginSlice";
import { setLoginState } from "./slice/loginSlice";
import logoutSlice from "./slice/logoutSlice"; 
import registerSlice from "./slice/registerSlice";

export { 
    fetchAuthLogin,
    fetchAuthLogout,
    loginSlice,
    setLoginState,
    logoutSlice,
    fetchAuthRegister,
    registerSlice
}