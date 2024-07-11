import { lazy } from "react";

const Banner = lazy(() => import("./organisms/Banner"));
const FormPulsa = lazy(() => import("./molecules/FormPulsa"));
const FormPaketData = lazy(() => import("./molecules/FormPaketData"));
const FormListrik = lazy(() => import("./molecules/FormListrik"));
const TopUp = lazy(() => import("./organisms/TopUp"));
const PenggunaBaru = lazy(() => import("./organisms/PenggunaBaru"));
const Kupon = lazy(() => import("./organisms/Kupon"));
const ProductHome = lazy(() => import("./organisms/ProductHome"));

export { 
    Banner, 
    TopUp,
    FormPulsa,
    FormPaketData,
    FormListrik,
    PenggunaBaru,
    Kupon,
    ProductHome 
}