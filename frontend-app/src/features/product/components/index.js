import { lazy } from "react";

const BodyDetailProduct = lazy(() => import('./organisms/BodyDetailProduct'));
const CheckoutProduct = lazy(() => import('./organisms/CheckoutProduct'));
const MarketProductHeader = lazy(() => import('./organisms/MarketProductHeader'));
const ProductShope = lazy(() => import('./organisms/ProductShope'));
const SearchResultProduct = lazy(() => import('./organisms/SearchResultProduct'));
const ProductDetailLainnya = lazy(() => import('./organisms/ProductDetailLainnya'));
const ProductRekomendasi = lazy(() => import('./organisms/ProductRekomendasi'));
const BodyInfoProduct = lazy(() => import('./organisms/BodyInfoProduct'));


export {
    BodyDetailProduct,
    CheckoutProduct,
    MarketProductHeader,
    ProductShope,
    SearchResultProduct,
    ProductDetailLainnya,
    ProductRekomendasi,
    BodyInfoProduct
}