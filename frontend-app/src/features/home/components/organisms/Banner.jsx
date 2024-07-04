import React, { useState } from 'react'
import SliderBanner from '../molecules/SliderBanner'
import { Link } from 'react-router-dom'

function Banner() {
    const [open, setIsOpen] = useState(false)

    const onOpen = () => {
        setIsOpen(true)
    }

    const onClose = () => {
        setIsOpen(false)
    }

    return (
        <div className='relative mx-16 my-3' onMouseEnter={onOpen} onMouseLeave={onClose}>
            <SliderBanner open={open} />
            <div className='absolute flex items-center justify-center bottom-0 right-0 my-4 mx-2 text-center bg-black rounded-md p-1'>
                <Link to='#' className='text-white text-xs font-semibold px-2 tracking-tight'>Lihat Promo Lainnya</Link>
            </div>
        </div>
    )
}

export default Banner
