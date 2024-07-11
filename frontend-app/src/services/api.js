import axiosInstance from "../config/axiosInstance";

const api = {
    // Auth
    register: (data) => axiosInstance.post('/register', data),
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
    getDetailProduct: (productSlug) => axiosInstance.get(`/product/${productSlug}`),

    // Cart
    getCard: () => axiosInstance.get('/card'),
    addCard: (data) => axiosInstance.post('/card', data),
    getCardProduct: (productId, userId) => axiosInstance.get(`/card-product?productId=${productId}&userId=${userId}`),

}

export default api