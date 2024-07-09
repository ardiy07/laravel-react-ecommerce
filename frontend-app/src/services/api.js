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
    getProductSearch: (key) => axiosInstance.get(`/product/search?key=${key}`),
    getProductKupon: (categorie, limit, page) => axiosInstance.get(`/products?categorie=${categorie}&limit=${limit}&page=${page}`),

}

export default api