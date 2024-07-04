export function getAssetImages(image) {
    const assetPathImage = import.meta.env.APP_ASSETS_IMAGE_PATH;
    return `${assetPathImage}${image}`;
}
export function getAssetIcons(icon) {
    const assetPathIcons = import.meta.env.APP_ASSETS_ICONS_PATH;
    return `${assetPathIcons}${icon}`;
}
