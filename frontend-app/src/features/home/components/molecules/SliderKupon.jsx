import React, { useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { BackSlider, CardProduct, NextSlider } from '../../../../components';
import useSlider from '../../../../hooks/useSlider';
import { APP_DEBUG } from '../../../../config/env';
import { getAssetImages } from '../../../../utils/pathUtils';
import { discountPercentage, formatOrder } from '../../../../utils/formatUtils';

function SliderKupon({data}) {
    const [open, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const slide = 18
    const { shouldHideNextArrow, shouldHidePrevArrow, updateCurrentSlide,currentSlide } = useSlider(slide);
    const settings = {
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: <NextSlider onOpen={open} onHidden={shouldHideNextArrow}/>,
        prevArrow: <BackSlider onOpen={open} onHidden={shouldHidePrevArrow}/>,
        beforeChange: (current, next) => updateCurrentSlide(next),
    };
    
    if(APP_DEBUG){
        console.log('Data Kupon', data)
    }
    return (
        <div className="w-full z-0 overflow-x-hidden" onMouseOver={onOpen} onMouseLeave={onClose}>
            <Slider {...settings} className='flex items-center h-96'>
                <div className={`bg-[#FFE0A2] max-w-[16rem] h-full absolute -z-10 rounded-xl transform duration-1000 ${currentSlide == 0 ? "translate-x-0 opacity-100 ml-0" : "translate-x-full opacity-0 -ml-96"}`}>
                    <img src={getAssetImages('promo/d5849fb8-7c42-4f4d-96cf-c0ee5a81a936.png.webp')} className='w-[8.5rem] ml-10' alt='slider' />
                </div>
                {data.map((item, index) => (
                    <CardProduct
                        key={index}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        priceSale={item.priceSale}
                        promo={null}
                        type={item.value}
                        icon={item.iconShope}
                        city={item.city}
                        rating={item.rating}
                        order={item.order}
                        shopeSlug={item.shopeSlug}
                        productSlug={item.productSlug}
                    />
                ))}
            </Slider>
        </div>
    )
}

export default SliderKupon
