import { lazy } from "react";

const AuthHeader = lazy(() => import("./AuthHeader"));
const LoginPage = lazy(() => import("./LoginPage"));
const RegisterPage = lazy(() => import("./RegisterPage"));

export { AuthHeader, LoginPage, RegisterPage }