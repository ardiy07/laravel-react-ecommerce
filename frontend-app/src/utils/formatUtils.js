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

export const formatOrder = (order) =>{
  if(order < 100){
    return order
  } else if(order > 100 && order < 1000){
    const firstDigit = order.toString()[0];
    return firstDigit + "00+";
  } else if(order > 1000 && order < 10000){
    const firstDigit = order.toString()[0];
    return firstDigit + "rb+";
  } else if(order > 10000 && order < 100000){
    const firstDigit = order.toString()[0];
    const secondDigit = order.toString()[1];
    return firstDigit + secondDigit + "rb+";
  } else{
    const firstDigit = order.toString()[0];
    return firstDigit + "jt+";
  }
}
