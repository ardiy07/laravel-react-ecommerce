import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import useSlider from '../../../../hooks/useSlider'
import { BackSlider, CardProductPromo, NextSlider } from '../../../../components'
import { getAssetImages } from '../../../../utils/pathUtils'
import {APP_DEBUG} from '../../../../config/env'
import { discountPercentage, getStockStatus, orderPercentage } from '../../../../utils/formatUtils'

function SliderPenggunaBaru({data}) {
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
        console.log('Data Pengguna Baru', data);
    }

    return (
        <div className="w-full z-0 overflow-x-hidden" onMouseOver={onOpen} onMouseLeave={onClose}>
            <Slider {...settings} className='flex items-center h-80'>
                <div className={`bg-[#FFE0A2] max-w-[16rem] h-full absolute -z-10 rounded-xl transform duration-1000 ${currentSlide == 0 ? "translate-x-0 opacity-100 ml-0" : "translate-x-full opacity-0 -ml-96"}`}>
                    <img src={getAssetImages('promo/3a3ab6ad-b137-48cd-91e8-b25fe43464f7.png.webp')} className='w-[7.5rem] ml-10' alt='slider' />
                </div>
                {data.map((item, index) => (
                    <CardProductPromo
                        key={index}
                        image={item.image}
                        alt={item.name}
                        diskon={discountPercentage(item.price, item.priceSalePromotion)}
                        order={orderPercentage(item.order, item.stocks)}
                        stock={getStockStatus(orderPercentage(item.order, item.stocks))}
                        price={item.price}
                        priceDiscount={item.priceSalePromotion}
                        url={item.slug}
                    />
                ))}
            </Slider>
        </div>
    )
}

export default SliderPenggunaBaru
