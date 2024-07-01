import React, { useEffect, useState } from 'react'
import './index.css'
import DataNavbar from './DataNavbar.json'
import CardNavbarProduct from '../../../../components/molecules/card/CardNavbarProduct';
import ProductPageHome from '../product/ProductPageHome';

function NavbarProductHome() {
    const [style, setStyle] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);

    const [dataForyou, setDataForyou] = useState(24);
    const [dataRekomendasi1, setDataRekomendasi1] = useState(24);
    const [dataRekomendasi2, setDataRekomendasi2] = useState(24);
    const [dataRekomendasi3, setDataRekomendasi3] = useState(24);
    const [dataRekomendasi4, setDataRekomendasi4] = useState(24);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 2450) {
                setStyle('fixed top-[7.8rem] pt-2 shadow-md border-b pb-2');
            } else {
                setStyle('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className='bg-white relative mt-10'>
                <div className={`z-20 bg-white mb-3 w-full px-16 ${style}`}>
                    <div className='flex gap-2 items-start'>
                        {DataNavbar.map((item, index) => (
                            <CardNavbarProduct key={index} title={item.title} background={item.background} active={index == activeIndex} onClick={() => setActiveIndex(index)} />
                        ))}
                    </div>
                </div>
            </div>
            {activeIndex == 0 && <ProductPageHome data={dataForyou}/>}
            {activeIndex == 1 && <ProductPageHome data={dataRekomendasi1}/>}
            {activeIndex == 2 && <ProductPageHome data={dataRekomendasi2}/>}
            {activeIndex == 3 && <ProductPageHome data={dataRekomendasi3}/>}
            {activeIndex == 4 && <ProductPageHome data={dataRekomendasi4}/>}
        </>
    )
}

export default NavbarProductHome