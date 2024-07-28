import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

function GaleriProduct({ image, media }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  return (
    <div className='slider-container'>
      {/* <div>Hello</div> */}
      <div className=''>
        {/* <Slider asNavFor={nav2} ref={sliderRef1}>
          {media?.map((item, index) => ( */}
          <img src={image} className='w-[24rem] shadow-sm border rounded-lg' />
          {/* ))}
        </Slider> */}
      </div>
      {/* <div className='w-20 px-3 bg-red-300'>
        <Slider
          asNavFor={nav1}
          ref={sliderRef2}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {media?.map((item, index) => (
            <img key={index} src={item.image} className='w-2 shadow-sm border rounded-lg' />
          ))}
        </Slider>
      </div> */}
    </div>
  );
}

export default GaleriProduct;
