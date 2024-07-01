import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import data from './DataKategori.json'
import CardKategoriPilihan from '../../molecules/card/CardKategoriPilihan'
import { getAssetImages } from '../../../utils/pathUtils'
import { BackButton, NextButton } from '../../atoms'

function KategoriPilihan() {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextButton onOpen={isOpen} />,
        prevArrow: <BackButton onOpen={isOpen} />
    }
    return (
        <div onMouseEnter={onOpen} onMouseLeave={onClose}>
            <h2 className='text-xl font-bold'>Kategori Pilihan</h2>
            <div className='mt-4 mb-4'>
                <Slider {...settings} className='flex items-center'>
                    {data.map((dataItem, index) => (
                        <CardKategoriPilihan key={index} url={dataItem.url} image={getAssetImages(`topup/${dataItem.image}`)} title={dataItem.title} />
                    ))}
                </Slider>
                
            </div>
        </div >
    )
}

export default KategoriPilihan