import React, { useState } from 'react'
import Slider from 'react-slick'
import { getAssetImages } from '../../../utils/pathUtils'
import { BackButton, NextButton } from '../../atoms'

function Banner(props) {
    const [open, setIsOpen] = useState(false)

    const onOpen = () => {
        setIsOpen(true)
    }

    const onClose = () => {
        setIsOpen(false)
    }

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        swipe: false,
        nextArrow: <NextButton onOpen={open} />,
        prevArrow: <BackButton onOpen={open} />,
    }

    return (
        <div className='relative mx-16' onMouseEnter={onOpen} onMouseLeave={onClose}>
            <div className='my-3'>
                <div className='rounded-xl'>
                    <Slider {...settings} className='h-[19.3rem] rounded-xl overflow-hidden flex items-center w-full'>
                        {props.data.map((banner, index) => (
                            <a href={banner.url} key={index} className='w-full'>
                                <img src={getAssetImages(`banner/${banner.image}`)} alt={banner.title} className='w-[150rem]' />
                            </a>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className='flex items-center justify-center absolute bottom-0 right-0 my-4 mx-2 text-center bg-black rounded-md p-1'>
                <a href='#' className='text-white text-xs font-semibold px-2 tracking-tight'>Lihat Promo Lainnya</a>
            </div>
        </div>
    )
}

export default Banner