import React, { useEffect, useState } from 'react'
import { getAssetImages } from '../../../utils/pathUtils'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuthLogout } from '../../../features/authentication/services/authThunks'

function Profil({ onOpen, onClose }) {
    const [isOpen, setIsOpen] = useState(false)
    const [profile, setProfile] = useState(false)
    const dispatch = useDispatch();
    const logoutStatus = useSelector((state) => state.auth.status);

    const storeOpen = () => {
        setIsOpen(true)
        onOpen()
    }

    const storeClose = () => {
        setIsOpen(false)
        onClose()
    }

    const profileOpen = () => {
        setProfile(true)
        onOpen()
    }

    const profileClose = () => {
        setProfile(false)
        onClose()
    }

    const handleLogout = () => {
        dispatch(fetchAuthLogout());
    }

    // useEffect(() => {
    //     if (logoutStatus === 'idle') {
    //         // Hanya lakukan setProfile(false) jika logout berhasil
    //         setProfile(false);
    //         if (!profile) {
    //             onClose()
    //         }
    //     }
    // }, [logoutStatus, profile, onClose]);

    return (
        <div className='flex gap-3'>
            {/* Toko */}
            <div className='relative' onMouseEnter={storeOpen} onMouseLeave={storeClose}>
                <button className={`flex items-center gap-3 hover:bg-gray-100 px-2 py-1 rounded-md ${isOpen ? 'bg-gray-100' : ''}`}>
                    <img src={getAssetImages('default/default_v3-shopnophoto.png')} className='rounded-full w-8' />
                    <p className=' font-normal text-gray-900 tracking-tight'>Toko</p>
                </button>
                {isOpen && (
                    <div className='absolute z-10 w-72 tracking-tight bg-white shadow-2xl rounded-md right-0 border -mx-20 flex gap-4 flex-col items-center px-3 py-6'>
                        <p className='text-gray-500 font-medium text-sm tracking-tight'>Anda Belum Memiliki Toko </p>
                        <a href='#' className='bg-green-600 text-sm text-white py-1 px-12 font-bold rounded-lg'>
                            Buka Toko Gratis
                        </a>
                        <p className='text-xs text-gray-500 font-medium tracking-tight'>Tokomu hilang?
                            <span className='text-green-500 ml-1 font-bold text-sm'>
                                <a href='#'>
                                    Pelajari Selengkapnya
                                </a>
                            </span>
                        </p>
                    </div>
                )}
            </div>

            {/* Profil */}
            <div className='realative' onMouseEnter={profileOpen} onMouseLeave={profileClose}>
                <button className='flex items-center gap-3 hover:bg-gray-100 px-2 py-1 rounded-md'>
                    <img src={getAssetImages('default/default_v3-usrnophoto1.png')} className='rounded-full w-8' />
                    <p className=' font-normal text-gray-900 tracking-tight'>Ardi</p>
                </button>
                {profile && (
                    <div className='absolute z-10 w-96 tracking-tight bg-white shadow-2xl rounded-md right-0 border mx-10 flex flex-col px-3 py-1'>
                        <div className='px-5 gap-3 flex border shadow-lg py-3 items-center rounded-lg'>
                            <img src={getAssetImages('default/default_v3-usrnophoto1.png')} className='rounded-full w-10 shadow-lg' />
                            <div className='flex flex-col gap-1'>
                                <p className='font-semibold'>Ardi</p>
                                <a href='#' className='text-gray-500 text-base font-normal flex gap-1 items-center'>
                                    <img src={getAssetImages('default/pakai_promo_member_silver.png')} className='w-5' />
                                    <p className='tracking-tight'>Member Silver</p>
                                    {/* <Icon.Header icon={faChevronRight} /> */}
                                </a>
                            </div>
                            <button className='bg-green-400' onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Profil
