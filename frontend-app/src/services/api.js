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
    getProductPromotion: (promotion) => axiosInstance.get('/promotion?promotion=' + promotion),
    getProductSearch: (query, page) => axiosInstance.get('/products?query=' + query + '&limit=25&page=' + page),
    getProductKupon: () => axiosInstance.get('/products'),
    getDetailProduct: (productSlug) => axiosInstance.get('/product/' + productSlug),
    getProductHome: (query, limit, page) => axiosInstance.get('/products?query=' + query + '&limit=' + limit + '&page=' + page),
    getProductTrending: (page) => axiosInstance.get('/product-trending?page=' + page),
    getProductByShope: (shope, page) => axiosInstance.get('/product-shope/' + shope + '?limit=12&page=' + page),

    // Cart
    getCard: () => axiosInstance.get('/card'),
    addCard: (data) => axiosInstance.post('/card', data),
    getCardProduct: (productId, userId) => axiosInstance.get('/card-product?productId=' + productId + '&userId=' + userId ),

    // Review
    getReview: (slug) => axiosInstance.get('/reviews?slug=' + slug),

    // Address
    getSearchAddres: (query) => axiosInstance.get('/search-address?search=' + query),

}

export default api