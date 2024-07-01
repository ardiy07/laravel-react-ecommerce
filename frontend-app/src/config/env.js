const API_URL = import.meta.env.APP_API_URL || 'http://127.0.0.1:8000/api/v1/';
const ASSET_PATH = import.meta.env.APP_ASSETS_PATH || 'http://127.0.0.1:5173/src/assets/';
const APP_DEBUG = import.meta.env.APP_DEBUG || false;
const APP_PRODUCTION = import.meta.env.APP_PRODUCTION || false;

export { API_URL, ASSET_PATH, APP_DEBUG, APP_PRODUCTION }