import { lazy } from "react";

const BackButton = lazy(() => import("./button/BackButton"));
const NextButton = lazy(() => import("./button/NextButton"));
const TopUpButton = lazy(() => import("./button/TopUpButton"));
const FallbackButton = lazy(() => import("./button/FallbackButton"));
const AuthButton = lazy(() => import("./button/AuthButton"));
const InputSearch = lazy(() => import("./input/InputSearch"));
const Input = lazy(() => import("./input/Input"));
const Dropdown = lazy(() => import("./input/Dropdown"));

export { BackButton, NextButton, TopUpButton, FallbackButton, AuthButton, InputSearch, Input, Dropdown };