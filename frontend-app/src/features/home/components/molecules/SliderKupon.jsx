import React, { useState } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { BackSlider, CardProduct, NextSlider } from '../../../../components';
import useSlider from '../../../../hooks/useSlider';
import { APP_DEBUG } from '../../../../config/env';
import { getAssetImages } from '../../../../utils/pathUtils';
import LoadingCard from '../../../../components/loading/LoadingCard';
import { useSelector } from 'react-redux';

function SliderKupon() {
    const [open, setOpen] = useState(false);
    const { data, status, meta } = useSelector((state) => state.productKupon);

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const slide = meta.per_page;
    const { shouldHideNextArrow, shouldHidePrevArrow, updateCurrentSlide, currentSlide } = useSlider(slide);
    const settings = {
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: <NextSlider onOpen={open} onHidden={shouldHideNextArrow} />,
        prevArrow: <BackSlider onOpen={open} onHidden={shouldHidePrevArrow} />,
        beforeChange: (current, next) => updateCurrentSlide(next),
    };

    if (APP_DEBUG) {
        console.log('Data Kupon', data)
        console.log('data meta kupon: ', meta.per_page)
    }

    return (
        <div className="w-full z-0 overflow-x-hidden" onMouseOver={onOpen} onMouseLeave={onClose}>
            {/* Pending */}
            {status === 'pending' &&
                <>
                    <Slider {...settings} className='flex items-center h-96'>
                        <div className='h-full absolute max-w-[16rem] bg-gray-300 -z-10 rounded-lg animate-pulse'></div>
                        {Array.from({ length: 24 }).map((_, index) => (
                            <LoadingCard />
                        ))}
                    </Slider>
                </>
            }

            {/* Succed */}
            {status === 'succeeded' &&
                <>
                    <Slider {...settings} className='flex items-center h-96'>
                        <div className={`bg-[#FFE0A2] max-w-[16rem] h-full absolute -z-10 rounded-xl transform duration-1000 ${currentSlide == 0 ? "translate-x-0 opacity-100 ml-0" : "translate-x-full opacity-0 -ml-96"}`}>
                            <img src={getAssetImages('promo/d5849fb8-7c42-4f4d-96cf-c0ee5a81a936.png.webp')} className='w-[8.5rem] ml-10' alt='slider' />
                        </div>
                        {data.map((item, index) => (
                            <CardProduct
                                key={index}
                                image={item.product.image}
                                name={item.product.name}
                                price={item.product.price}
                                priceSale={item.product.priceSale}
                                productSlug={item.product.productSlug}
                                type={item.product.varian}
                                order={item.product.order}
                                rating={item.product.rating}
                                promo={null}
                                icon={item.product.shope.icon}
                                city={item.product.shope.city}
                                shopeSlug={item.product.shope.slug}
                            />
                        ))}
                    </Slider>
                </>
            }
    
        </div>
    )
}

export default SliderKupon
