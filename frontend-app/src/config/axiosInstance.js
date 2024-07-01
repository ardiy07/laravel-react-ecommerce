import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.APP_API_URL, // Ganti dengan baseURL API Anda
    timeout: 30000, // Waktu timeout permintaan
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const authData = localStorage.getItem('authData');
        if (authData) {
            const serviceData = JSON.parse(authData);
            const token = serviceData.authService.tokenAuth;
            
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('authData');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;