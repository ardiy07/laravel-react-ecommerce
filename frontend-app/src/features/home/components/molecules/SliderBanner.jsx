import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import DataBanner from '../data/DataBenner.json'
import BannerImage from '../atoms/BannerImage'
import { BackSlider, NextSlider } from '../../../../components'

function SliderBanner({ open }) {
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
        nextArrow: <NextSlider onOpen={open} />,
        prevArrow: <BackSlider onOpen={open} onClick={() => console.log('click')} />,
    }

    return (
        <Slider {...settings} className='rounded-xl h-full overflow-hidden'>
            {DataBanner.map((banner, index) => (
                <BannerImage
                    key={index}
                    image={banner.image}
                    title={banner.title}
                    to={banner.url}
                />
            ))}
        </Slider>
    )
}

export default SliderBanner
