import React, { useReducer, useCallback } from 'react';
import Slider from 'react-slick';
import { initialState, reducer, openSlider, closeSlider, updateSlide } from '../../../../utils/sliderUtils'; 
import { getAssetImages } from '../../../../utils/pathUtils';
import CardProduckPromo from '../../../../components/molecules/card/CardProduckPromo';
import { BackButton, NextButton } from '../../../../components/atoms';

function PenggunaBaruHome() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSliderAction = (action, ...args) => () => {
        dispatch(action(...args));
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: <NextButton onHidden={state.isNext} onOpen={state.isOpen} />,
        prevArrow: <BackButton onHidden={state.isBack} onOpen={state.isOpen} />,
        beforeChange: useCallback((current, next) => {
            dispatch(updateSlide(current, next));
        }, []),
    };

    return (
        <div className='mx-16 mb-10 pb-5 border-b'>
            <div className='flex items-end gap-3 mb-3'>
                <h2 className='text-2xl font-bold'>Khusus Pengguna Baru</h2>
                <p className='text-gray-500 font-medium'>Berakhir dalam</p>
                <a href="/" className='font-bold text-green-600 text-base'>Lihat Semua</a>
            </div>
            <div className="w-full z-0 overflow-x-hidden" onMouseOver={handleSliderAction(openSlider)} onMouseLeave={handleSliderAction(closeSlider)}>
                <Slider {...settings} className='flex items-center h-80'>
                    <div className={`bg-[#FFE0A2] max-w-72 h-full absolute -z-10 rounded-xl transform duration-1000 ${state.isBack ? "translate-x-0 opacity-100 ml-0" : "translate-x-full opacity-0 -ml-96"}`}>
                        <img src={getAssetImages('promo/3a3ab6ad-b137-48cd-91e8-b25fe43464f7.png.webp')} className='w-[7.5rem] ml-10' alt='slider' />
                    </div>
                    {Array.from({ length: 20 }).map((_, index) => (
                        <CardProduckPromo
                            key={index}
                            url='#'
                            image={index + 1}
                            alt={`Kupon Diskon ${index + 1}`}
                            price={1000 * 10 + 300 * index}
                            persentage={15 + index + 1 }
                            priceDiscount={8000 - 300 * index}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default PenggunaBaruHome