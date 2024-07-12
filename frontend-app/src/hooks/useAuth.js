import { useDispatch, useSelector } from "react-redux"
import { fetchAuthLogout } from "../features/authentication";
import { setItemLocalStorage } from "../config/localStorageConfig";
import { useNavigate } from "react-router-dom";
import { resetCard } from "../features/product/services/slice/cardGetSlice";
import { resetLogin } from "../features/authentication/services/slice/loginSlice";

const useAuth = () => {
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const name = useSelector((state) => state.login.dataUser);


    // Login
    // const statusLogin = useSelector((state) => state.login.status);
    const isLogin = useSelector((state) => {
        const authData = localStorage.getItem('authData');
        if (!authData) {
            localStorage.clear();
            return false;
        }
        const authService = JSON.parse(authData);
        return authService.tokenAuth !== null;
    });

    const handleLogout = async () => {
        try {
            await dispatch(fetchAuthLogout()).unwrap();
            setItemLocalStorage('isLogin', 'false');
            dispatch(resetCard())
            dispatch(resetLogin
                ())
            localStorage.clear();
            navigate('./')
        } catch (error) {
            console.error('Failed to logout:', error);
        }
    }

    return {
        isLogin,
        handleLogout,
        name
    }

}

export default useAuth