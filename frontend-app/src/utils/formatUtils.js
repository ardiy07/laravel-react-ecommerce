export const formatCurrency = (amount) => {
  if (isNaN(amount) || amount === null) return "Rp0";
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

// Fungsi untuk menghitung persentase diskon
export const discountPercentage = (originalPriceStr, salePriceStr) => {
  const originalPrice = parseFloat(originalPriceStr);
  const salePrice = parseFloat(salePriceStr);

  if (!isNaN(originalPrice) && !isNaN(salePrice) && originalPrice > 0 && salePrice > 0 && originalPrice > salePrice) {
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

export const formatOrder = (order) => {
  if (typeof order !== 'number' && typeof order !== 'string') {
    return "Invalid order";
  }
  order = Number(order);

  if (isNaN(order)) {
    return "Invalid order";
  }

  if (order < 100) {
    return order.toString();
  } else if (order >= 100 && order < 1000) {
    const firstDigit = order.toString()[0];
    return firstDigit + "00+";
  } else if (order >= 1000 && order < 10000) {
    const firstDigit = order.toString()[0];
    return firstDigit + "rb+";
  } else if (order >= 10000 && order < 100000) {
    const firstDigit = order.toString()[0];
    const secondDigit = order.toString()[1];
    return firstDigit + secondDigit + "rb+";
  } else {
    const firstDigit = order.toString()[0];
    return firstDigit + "jt+";
  }
};

export const capitalize = (str) => {
  return str.toLowerCase().replace(/\b\w/g, function (match) {
    return match.toUpperCase();
  });
}

export const formatRating = (rating) => {
  if (rating >= 0) {
    return 1
  } else if (rating > 1.5) {
    return 2
  } else if (rating > 2.5) {
    return 3
  } else if (rating > 3.5) {
    return 4
  } else if (rating > 4.5) {
    return 5
  } else {
    return 1
  }
}
