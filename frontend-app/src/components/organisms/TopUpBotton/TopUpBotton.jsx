import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import CoresulTopUp from '../../molecules/card/CoresulTopUp'
import data from './DataTopUp.json'
import { getAssetImages } from '../../../utils/pathUtils'
import { BackButton, NextButton } from '../../atoms'

function TopUpBotton() {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };

    const settings = {
        className: "w-auto center",
        dots: false,
        infinite: false,
        speed: 500,
        centerPadding: "60px",
        slidesToShow: 1,
        swipe: false,
        variableWidth: true,
        nextArrow: <NextButton onOpen={isOpen} />,
        prevArrow: <BackButton onOpen={isOpen} />
    }

    return (
        <div className='col-span-2 py-6' onMouseEnter={onOpen} onMouseLeave={onClose}>
            <Slider {...settings} className='flex flex-auto items-center max-w-fit'>
                {data.map((item, index) => (
                    <CoresulTopUp key={index} url={item.url} image={getAssetImages(`topup/${item.image}`)} name={item.name} />
                ))}
            </Slider>
        </div>
    )
}

export default TopUpBotton