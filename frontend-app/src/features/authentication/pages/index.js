import { lazy } from "react";

const AuthHeader = lazy(() => import("./AuthHeader"));
const LoginPage = lazy(() => import("./LoginPage"));

export { AuthHeader, LoginPage }