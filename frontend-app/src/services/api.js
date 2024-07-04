import axiosInstance from "../config/axiosInstance";

const api = {
    // Auth
    login: (data) => axiosInstance.post('/login', data),
    logout: () => axiosInstance.post('/logout'),

    // Profile
    getUser: () => axiosInstance.get('/profile-user'),


    // Shope
    getShopeUser: () => axiosInstance.get('/shope-user'),


    // Product
    getProductPromotion: (promotion) => axiosInstance.get(`/product-promotion?promotion=${promotion}`),

}

export default api