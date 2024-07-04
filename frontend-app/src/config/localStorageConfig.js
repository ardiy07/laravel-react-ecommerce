export const getItemLocalStorage = (key) => {
    const storedItem = localStorage.getItem(key);
    return storedItem ? JSON.parse(storedItem) : null;
};

export const setItemLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const removeItemLocalStorage = (key) => {
    localStorage.removeItem(key);
};