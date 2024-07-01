export const formatCurrency = (amount) => {
    if (isNaN(amount) || amount === null) return "Rp0";
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}