import React, { useEffect, useState } from 'react'
import Links from '../../atoms/Links'
import Search from '../../molecules/search/Search'
import Market from '../../molecules/market/Market'
import Message from '../../molecules/message/Message'
import Notifikasi from '../../molecules/notifikasi/Notifikasi'
import Auth from '../../molecules/profilHeader/Auth'
import Profil from '../../molecules/profilHeader/Profil'
import { getAssetImages } from '../../../utils/pathUtils'
import './index.css'

function Header(props) {
    const [style, setStyle] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 2450) {
                setStyle('');
            } else {
                setStyle('shadow-sm border-b');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <header className={`bg-white z-30  sticky top-0 ${style}`}>
            {/* Top Header */}
            <div className='bg-gray-100 py-1 hidden lg:block px-10'>
                <div className='flex justify-between items-center text-sm container mx-auto font-normal'>
                    <div className='flex font-normal text-sm gap-2 items-center'>
                        <span className='flex items-center justify-center'>
                            <i className='icon'></i>
                        </span>
                        <Links.TopHeader href="#">Download Tokopedia App</Links.TopHeader>
                    </div>
                    <div className='grid grid-flow-col gap-8'>
                        <Links.TopHeader href="#">Tentang Tokopedia</Links.TopHeader>
                        <Links.TopHeader href="#">Mitra Tokopedia</Links.TopHeader>
                        <Links.TopHeader href="#">Pusat Edukasi Seller</Links.TopHeader>
                        <Links.TopHeader href="#">Promo</Links.TopHeader>
                        <Links.TopHeader href="#">Tokopedia Care</Links.TopHeader>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <nav className='flex w-full h-16 items-center px-10'>
                <div className="hidden md:block mr-5">
                    <Links.TopHeader href="#">
                        <img src={getAssetImages("e5b8438b.svg")} alt="Logo" className=' w-38' />
                    </Links.TopHeader>
                </div>
                <div className='flex mr-3 px-2 py-2 rounded-lg hover:bg-gray-200 items-center'>Kategori</div>
                <div className='w-6/12 mr-5'>
                    <Search onOpen={props.onOverlayOpen} onClose={props.onOverlayClose} />
                </div>
                <div className='mr-1 flex gap-2'>
                    {props.auth ? (
                        <>
                            <Market onOpen={props.onOverlayOpen} onClose={props.onOverlayClose} auth={props.auth} count={3} />
                            <Notifikasi onOpen={props.onOverlayOpen} onClose={props.onOverlayClose} />
                            <Message onOpen={props.onOverlayOpen} onClose={props.onOverlayClose} />
                        </>
                    ) : (
                        <div className='ml-20'>
                            <Market onOpen={props.onOverlayOpen} onClose={props.onOverlayClose} auth={props.auth} />
                        </div>
                    )}
                </div>

                <span className='w-[0.05rem] h-6 bg-gray-200 mx-2'></span>
                <div className='ml-2'>
                    {props.auth ? (
                        <Profil onOpen={props.onOverlayOpen} onClose={props.onOverlayClose} />
                    ) : (
                        <Auth />
                    )}
                </div>
            </nav>

            {/* Bottom Header */}
            <div className='flex justify-between ml-72 mx-10'>
                <div className='w-4/6 flex gap-3'>
                    <Links.BottonHeader href="#">Batik Pria</Links.BottonHeader>
                    <Links.BottonHeader href="#">Iphone 12 Pro Max</Links.BottonHeader>
                    <Links.BottonHeader href="#">Tas Selempang Pria</Links.BottonHeader>
                    <Links.BottonHeader href="#">Sepeda Lipat</Links.BottonHeader>
                    <Links.BottonHeader href="#">Mas Antam</Links.BottonHeader>
                    <Links.BottonHeader href="#">Kompor Listrik</Links.BottonHeader>
                </div>
                <div className='flex gap-1'>
                    <span className='body-icon-located'>
                        <i className='icon-located'></i>
                    </span>
                    <p className='text-sm tracking-tight'>Pilih Alamat Pengirimanmu</p>
                    <button id='dropdownlocated'>
                        <i className='icon-down'></i>
                    </button>
                </div>

            </div>
            <div>

            </div>

        </header>
    )
}

export default Header