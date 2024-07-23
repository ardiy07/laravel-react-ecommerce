import { lazy } from "react";

import LoadingLazzy from "./loading/LoadingLazzy";
import NextSlider from "./button/NextSlider";
import BackSlider from "./button/BackSlider";
import LinkPage from "./link/LinkPage";
import Input from "./input/Input";
import Dropdown from "./input/Dropdown";
import CardProductPromo from "./card/CardProductPromo";
const CountDownTimer = lazy(() => import("./CountDownTimer"));
import CardProduct from "./card/CardProduct";
import PlusProduct from "./button/PlusProduct";
import MinusProduct from "./button/MinusProduct";
import LoadinButtonWhite from "./loading/LoadinButtonWhite";
import LoadingUlasan from "./loading/LoadingUlasan";

export { 
    LoadingLazzy, 
    NextSlider, 
    BackSlider, 
    LinkPage,
    Input,
    Dropdown,
    CardProductPromo,
    CountDownTimer,
    CardProduct,
    PlusProduct,
    MinusProduct,
    LoadinButtonWhite,
    LoadingUlasan
}