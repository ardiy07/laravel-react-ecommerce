export const getItem = (key) => {
    const storedItem = localStorage.getItem(key);
    return storedItem ? JSON.parse(storedItem) : null;
};

export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const removeItem = (key) => {
    localStorage.removeItem(key);
};