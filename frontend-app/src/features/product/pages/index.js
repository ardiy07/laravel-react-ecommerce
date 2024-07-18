import { lazy } from "react";

const ProductDetailPage = lazy(() => import("./ProductDetailPage"));
const ProductPage = lazy(() => import("./ProductPage")); 
const ProductRekomenPage = lazy(() => import("./ProductRekomenPage"));

export {
    ProductDetailPage,
    ProductPage,
    ProductRekomenPage
}