import { useState } from "react";

const useSlider = (slide) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const shouldHideNextArrow = currentSlide === slide;
    const shouldHidePrevArrow = currentSlide === 0;

    const updateCurrentSlide = (next) => {
        setCurrentSlide(next);
    };

    return {
        shouldHideNextArrow,
        shouldHidePrevArrow,
        updateCurrentSlide,
        currentSlide
    };
}

export default useSlider