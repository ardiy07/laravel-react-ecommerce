import { lazy } from "react";

const ModalLogin = lazy(() => import("./organisms/ModalLogin"));
const BodyLogin = lazy(() => import("./organisms/BodyLogin"));
const BodyRegister = lazy(() => import("./organisms/BodyRegister"));

export { ModalLogin, BodyLogin, BodyRegister }