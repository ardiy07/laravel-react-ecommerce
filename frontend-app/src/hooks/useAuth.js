import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authentication/services/authSlice';

const useAuth = () => {
    const isLogin = useSelector((state) => {
        const authData = localStorage.getItem('authData');
        if (!authData) {
            localStorage.clear();
            return false;
        }
        const authService = JSON.parse(authData).authService;
        return authService.tokenAuth !== null;
    });

    const dataUser = useSelector((state) => state.auth.dataUser);

    return {
        isLogin,
        dataUser
    }
}

export default useAuth