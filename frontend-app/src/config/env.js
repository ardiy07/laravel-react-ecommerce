export const API_URL = import.meta.env.APP_API_URL || 'http://127.0.0.1:8000/api/v1/';
export const ASSET_PATH = import.meta.env.APP_ASSETS_PATH || 'http://127.0.0.1:5173/src/assets/';
export const APP_DEBUG = import.meta.env.APP_DEBUG === 'true' || 'false';
export const APP_PRODUCTION = import.meta.env.APP_PRODUCTION === 'true' || 'false';