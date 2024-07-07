import axiosInstance from './axiosInstance';

const getData = async (endpoint, authRequired = true) => {
    try {
        const config = authRequired ? {} : { headers: { Authorization: undefined } };
        const response = await axiosInstance.get(endpoint, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getDataWithParams = async (endpoint, params, authRequired = true) => {
    try {
        const config = authRequired ? {} : { headers: { Authorization: undefined } };
        const response = await axiosInstance.get(endpoint, { params, ...config });
        return response.data;
    } catch (error) {
        throw error;
    }
};

const insertData = async (endpoint, data, authRequired = true) => {
    try {
        const config = authRequired ? {} : { headers: { Authorization: undefined } };
        const response = await axiosInstance.post(endpoint, data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const updateData = async (endpoint, data, authRequired = true) => {
    try {
        const config = authRequired ? {} : { headers: { Authorization: undefined } };
        const response = await axiosInstance.put(endpoint, data, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const deleteData = async (endpoint, authRequired = true) => {
    try {
        const config = authRequired ? {} : { headers: { Authorization: undefined } };
        const response = await axiosInstance.delete(endpoint, config);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export { getData, getDataWithParams, insertData, updateData, deleteData };