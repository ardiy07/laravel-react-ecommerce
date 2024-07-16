import { lazy } from "react";

const ProductDetail = lazy(() => import("./ProductDetail"));
const Product = lazy(() => import("./Product")); 

export {
    ProductDetail,
    Product
}