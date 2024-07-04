import React from 'react'
import { getAssetImages } from '../../../../utils/pathUtils'

function SliderLabel({color, image, currentSlide}) {
    return (
        <div className={`bg-[${color}] max-w-[16rem] h-full absolute -z-10 rounded-xl transform duration-1000 ${currentSlide == 0 ? "translate-x-0 opacity-100 ml-0" : "translate-x-full opacity-0 -ml-96"}`}>
            <img src={getAssetImages(`promo/${image}`)} className='w-[7.5rem] ml-10' alt='slider' />
        </div>
    )
}

export default SliderLabel
