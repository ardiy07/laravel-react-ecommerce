import { lazy } from "react";

const ModalLogin = lazy(() => import("./organisms/ModalLogin"));
const BodyLogin = lazy(() => import("./organisms/BodyLogin"));

export { ModalLogin, BodyLogin }