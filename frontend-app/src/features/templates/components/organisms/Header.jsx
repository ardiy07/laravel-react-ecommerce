import React, { Suspense, useEffect, useState } from 'react';
import TopHeader from '../molecules/TopHeader';
import '../index.css';
import LogoHeader from '../molecules/LogoHeader';
import SearchHeader from '../molecules/SearchHeader';
import MessageHeader from '../molecules/MessageHeader';
import NotifikasiHeader from '../molecules/NotifikasiHeader';
import MarketHeader from '../molecules/MarketHeader';
import AuthHeader from '../../../authentication/pages/AuthHeader';
import useAuth from '../../../../hooks/useAuth';
import ModalShope from '../../../shope/components/organisms/ModalShope';
import LinkButton from '../atoms/LinkButton';
import { ModalProfile } from '../../../profile/components';
import { LoadingLazzy } from '../../../../components';

function Header(props) {
    const [style, setStyle] = useState('');
    const { isLogin } = useAuth();

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
            <TopHeader />
            {/* Navbar */}
            <nav className='flex w-full h-16 items-center px-10'>
                {/* Logo */}
                <LogoHeader to={'/'} />
                {/* Kategori */}
                <div className='flex mr-3 px-2 py-2 text-sm rounded-lg hover:bg-gray-200 items-center'>Kategori</div>
                {/* Search */}
                <div className='w-6/12 mr-5'>
                    <SearchHeader onOpen={props.onOverlayOpen} onClose={props.onOverlayClose} />
                </div>
                {/* Icon */}
                <div className='mr-1 flex gap-1'>
                    {isLogin ? (
                        <>
                            <MarketHeader onOpen={props.onOverlayOpen} onClose={props.onOverlayClose} auth={isLogin} count={0} />
                            <NotifikasiHeader onOpen={props.onOverlayOpen} onClose={props.onOverlayClose} />
                            <MessageHeader onOpen={props.onOverlayOpen} onClose={props.onOverlayClose} />
                        </>
                    ) : (
                        <div className='ml-20'>
                            <MarketHeader onOpen={props.onOverlayOpen} onClose={props.onOverlayClose} auth={props.auth} />
                        </div>
                    )}
                </div>

                <span className='w-[0.05rem] h-6 bg-gray-200 mx-2'></span>

                {/* Account */}
                <div className='w-48'>
                    {isLogin ? (
                        <div className='flex gap-1 justify-between w-full'>
                            <Suspense fallback={<LoadingLazzy />}>
                                <ModalShope onOpen={props.onOverlayOpen} onClose={props.onOverlayClose} />
                            </Suspense>
                            <Suspense fallback={<LoadingLazzy />}>
                                <ModalProfile onOpen={props.onOverlayOpen} onClose={props.onOverlayClose} />
                            </Suspense>
                        </div>
                    ) : (
                        <AuthHeader />
                    )}
                </div>
            </nav>

            <div className='flex justify-between ml-72 mx-10'>
                <div className='w-4/6 flex gap-3'>
                    <LinkButton href="#">Batik Pria</LinkButton>
                    <LinkButton href="#">Iphone 12 Pro Max</LinkButton>
                    <LinkButton href="#">Tas Selempang Pria</LinkButton>
                    <LinkButton href="#">Sepeda Lipat</LinkButton>
                    <LinkButton href="#">Mas Antam</LinkButton>
                    <LinkButton href="#">Kompor Listrik</LinkButton>
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
        </header>
    )
}

export default Header
