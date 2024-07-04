export const formatCurrency = (amount) => {
    if (isNaN(amount) || amount === null) return "Rp0";
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

export const discountPercentage = (originalPrice, salePrice) => {
    if (originalPrice > 0 && salePrice > 0 && originalPrice > salePrice) {
        const discountPercentage = ((originalPrice - salePrice) / originalPrice) * 100;
        return Math.round(discountPercentage);
    }
    return 0;
};

export const orderPercentage = (order, stocks) => {
    if (stocks > 0) {
        const orderPercentage = (order / stocks) * 100;
        return Math.round(orderPercentage); 
    }
    return 0; 
};

export const getStockStatus = (orderPercentage) => {
    if (orderPercentage === 100) {
      return 'stok habis';
    } else if (orderPercentage > 60) {
      return 'terlaris';
    } else {
      return 'tersedia';
    }
  };