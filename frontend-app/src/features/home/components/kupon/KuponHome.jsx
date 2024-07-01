import React, { useReducer, useCallback } from 'react';
import Slider from 'react-slick';
import CardProduk from '../../../../components/molecules/card/CardProduk';
import { initialState, reducer, openSlider, closeSlider, updateSlide } from '../../../../utils/sliderUtils'; 
import { getAssetImages } from '../../../../utils/pathUtils';
import { BackButton, NextButton } from '../../../../components/atoms';

function KuponHome() {
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
      <div className='flex items-end gap-3 mb-4'>
        <h2 className='text-2xl font-bold'>Pake Kupon di atas</h2>
        <p className='text-gray-500 font-medium'>Ambil Produk Nyaris Gratisnya!</p>
        <a href="/" className='font-bold text-green-600 text-base'>Lihat Semua</a>
      </div>
      <div className="w-full z-0 overflow-x-hidden" onMouseOver={handleSliderAction(openSlider)} onMouseLeave={handleSliderAction(closeSlider)}>
        <Slider {...settings} className='flex items-center h-96'>
          <div className={`bg-[#FFE0A2] max-w-72 h-full absolute -z-10 rounded-xl transform duration-1000 ${state.isBack ? "translate-x-0 opacity-100 ml-0" : "translate-x-full opacity-0 -ml-96"}`}>
            <img src={getAssetImages('promo/d5849fb8-7c42-4f4d-96cf-c0ee5a81a936.png.webp')} className='w-[8.5rem] ml-10' alt='slider' />
          </div>
          {Array.from({ length: 20 }).map((_, index) => (
            <CardProduk
              key={index}
              url='#'
              image={index + 1}
              title={`Kupon Diskon ${index + 1}`}
              price={10000}
              rating="4.5"
              promo="Diskon 10%"
              sold={index + 115}
              discount="10000"
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default KuponHome;
