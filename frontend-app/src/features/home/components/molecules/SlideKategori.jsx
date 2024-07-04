import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { BackSlider, NextSlider } from '../../../../components'
import CardKategori from '../atoms/CardKategori'
import DataKategori from '../data/DataKategori.json'

function SlideKategori() {
    const [open, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextSlider onOpen={open} />,
        prevArrow: <BackSlider onOpen={open} />
    }

    return (
        <div onMouseEnter={onOpen} onMouseLeave={onClose}>
            <Slider {...settings} className='flex items-center'>
                {DataKategori.map((item, index) => (
                    <CardKategori key={index} to={item.url} image={item.image} alt={item.title} />
                ))}
            </Slider>
        </div>
    )
}

export default SlideKategori
