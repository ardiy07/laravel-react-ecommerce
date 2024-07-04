import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import DataTopUpButton from '../data/DataTopUpButton.json'
import { BackSlider, NextSlider } from '../../../../components'
import CardTopUpButton from '../atoms/CardTopUpButton'
import useSlider from '../../../../hooks/useSlider'
import { APP_DEBUG } from '../../../../config/env'

function SliderTopUpButton() {
    const [isOpen, setIsOpen] = useState(false);
    const slide = 2
    const { shouldHideNextArrow, shouldHidePrevArrow, updateCurrentSlide, currentSlide } = useSlider(slide);

    const onOpen = () => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };

    const settings = {
        className: 'slider variable-width',
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3,
        swipe: false,
        variableWidth: true,
        nextArrow: <NextSlider onOpen={isOpen} onHidden={shouldHideNextArrow}/>,
        prevArrow: <BackSlider onOpen={isOpen} onHidden={shouldHidePrevArrow}/>,
        beforeChange: (current, next) => updateCurrentSlide(next)
    };
    
    if(APP_DEBUG) {
        console.log({shouldHideNextArrow, shouldHidePrevArrow, updateCurrentSlide, currentSlide});
    }

    return (
        <div className='col-span-2 pt-6 pb-2 overflow-hidden' onMouseEnter={onOpen} onMouseLeave={onClose}>
            <Slider {...settings} className='flex items-center max-w-[90rem]'>
                {DataTopUpButton.map((item, index) => (
                    <CardTopUpButton key={index} url={item.url} image={item.image} name={item.name} />
                ))}
            </Slider>
        </div>
    )
}

export default SliderTopUpButton
