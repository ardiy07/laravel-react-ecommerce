import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/authentication/services/authSlice';

const useAuth = () => {
    const isLogin = useSelector((state) => {
        const authData = localStorage.getItem('authData');
        if (!authData) {
            // Jika tidak ada data autentikasi, hapus semua data localStorage
            localStorage.clear();
            return false;
        }
        const authService = JSON.parse(authData).authService;
        return authService.tokenAuth !== null;
    });

    const idUser = useSelector((state) => state.auth.idUser);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return {
        isLogin,
        idUser,
        handleLogout
    }
}

export default useAuth