import { lazy } from "react";

const Banner = lazy(() => import("./organisms/Banner"));
const FormPulsa = lazy(() => import("./molecules/FormPulsa"));
const FormPaketData = lazy(() => import("./molecules/FormPaketData"));
const FormListrik = lazy(() => import("./molecules/FormListrik"));
const TopUp = lazy(() => import("./organisms/TopUp"));
const PenggunaBaru = lazy(() => import("./organisms/PenggunaBaru"));

export { 
    Banner, 
    TopUp,
    FormPulsa,
    FormPaketData,
    FormListrik,
    PenggunaBaru 
}