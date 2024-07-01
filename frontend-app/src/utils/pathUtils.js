export function getAssetImages(image) {
    const assetPathImage = import.meta.env.APP_ASSETS_IMAGE_PATH;
    return `${assetPathImage}${image}`;
}
export function getAssetIcons(icon) {
    const baseUrl = import.meta.env.APP_BASE_URL;
    const assetPath = import.meta.env.APP_ASSETS_PATH;
    return `http://localhost:5173/src/assets/icons/${icon}`;
}
