import React, { useState } from 'react'
import { getAssetImages } from '../../../../utils/pathUtils'
import { Link } from 'react-router-dom'
import useDataUser from '../../../../hooks/useDataUser'
import { LoadingLazzy } from '../../../../components'

function ModalShope({ onOpen, onClose }) {
    const [isOpen, setIsOpen] = useState(false)
    const { dataShope, statusShope} = useDataUser()
    const storeOpen = () => {
        setIsOpen(true)
        onOpen()
    }

    const storeClose = () => {
        setIsOpen(false)
        onClose()
    }

    return (
        <div className='relative w-full' onMouseEnter={storeOpen} onMouseLeave={storeClose}>
            {statusShope === 'pending' ? (<LoadingLazzy />) :
                <button className={`flex items-center gap-1 w-full hover:bg-gray-100 px-2 py-1 rounded-md ${isOpen ? 'bg-gray-100' : ''}`}>
                    <img src={getAssetImages('default/default_v3-shopnophoto.png')} className='rounded-full w-8' />
                    <p className='font-medium text-gray-500 tracking-tight line-clamp-1 text-sm'>{dataShope?.data?.name || 'Toko'}</p>
                </button>
            }
            {isOpen && (
                <div className='mt-1 absolute z-10 w-72 tracking-tight bg-white shadow-2xl rounded-md right-0 border -mx-20 flex gap-4 flex-col items-center px-3 py-6'>
                    {dataShope && dataShope !== null ? (
                        <>
                            <p className='text-gray-500 font-medium text-sm tracking-tight'>Anda Memiliki Toko </p>
                            <Link to='/dashboard' className='bg-green-600 text-sm text-white py-1 px-12 font-bold rounded-lg'>
                                Lihat Toko
                            </Link>
                            <p className='text-xs text-gray-500 font-medium tracking-tight'>
                                Tokomu hilang?
                                <span className='text-green-500 ml-1 font-bold text-sm'>
                                    <a href='#'>
                                        Pelajari Selengkapnya
                                    </a>
                                </span>
                            </p>
                        </>
                    ) : (
                        <>
                            <p className='text-gray-500 font-medium text-sm tracking-tight'>Anda Belum Memiliki Toko </p>
                            <a href='#' className='bg-green-600 text-sm text-white py-1 px-12 font-bold rounded-lg'>
                                Buka Toko Gratis
                            </a>
                            <p className='text-xs text-gray-500 font-medium tracking-tight'>
                                Tokomu hilang?
                                <span className='text-green-500 ml-1 font-bold text-sm'>
                                    <a href='#'>
                                        Pelajari Selengkapnya
                                    </a>
                                </span>
                            </p>
                        </>
                    )}
                </div>
            )}
        </div>
    )
}

export default ModalShope
