import { lazy } from "react";

const BodyDetailProduct = lazy(() => import('./organisms/BodyDetailProduct'));
const CheckoutProduct = lazy(() => import('./organisms/CheckoutProduct'));
const MarketProductHeader = lazy(() => import('./organisms/MarketProductHeader'));

export {
    BodyDetailProduct,
    CheckoutProduct,
    MarketProductHeader
}