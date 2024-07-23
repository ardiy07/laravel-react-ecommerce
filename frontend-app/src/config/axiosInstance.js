import axios from 'axios';
import { APP_DEBUG } from './env';

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
            const token = serviceData.tokenAuth;

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
            localStorage.clear();
            window.location.href = '/login';
        } else if (error.response && error.response.status === 422) {
            if (APP_DEBUG) {
                console.log('Unauthorization');
            }
        } else if (error.response && error.response.status === 500) {
            if (APP_DEBUG) {
                console.log('Internal Server Error');
            }
        } else if (error.response && error.response.status === 408) {
            if (APP_DEBUG) {
                console.log('Request Timeout');
            }
        } else if (error.response && error.response.status === 404) {
            if (APP_DEBUG) {
                console.log('Silahkan coba beberapa saat lagi');
            }
        } else if (error.response && error.response.status === 403) {
            if (APP_DEBUG) {
                console.log('Forbidden');
            }
        } else if (error.response && error.response.status === 400) {
            if (APP_DEBUG) {
                console.log('Bad Request');
            }
        } else if (error.response && error.response.status === 401) {
            if (APP_DEBUG) {
                console.log('Unauthorized');
            }
        } else {
            if (APP_DEBUG) {
                console.log(error);
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;