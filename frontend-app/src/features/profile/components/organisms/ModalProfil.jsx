import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAssetImages } from '../../../../utils/pathUtils'
import useAuth from '../../../../hooks/useAuth'
import useDataUser from '../../../../hooks/useDataUser'
import { LoadingLazzy } from '../../../../components'

function ModalProfil({ onOpen, onClose }) {
    const [profile, setProfile] = useState(false)
    const { handleLogout } = useAuth();
    const { dataUser, statusProfile } = useDataUser();
    const profileOpen = () => {
        setProfile(true)
        onOpen()
    }

    const profileClose = () => {
        setProfile(false)
        onClose()
    }

    return (
        <div className='realative w-full' onMouseEnter={profileOpen} onMouseLeave={profileClose}>
            {statusProfile === 'pending' ? (<LoadingLazzy />) :
                <button className={`flex items-center gap-1 w-full hover:bg-gray-100 px-2 py-1 rounded-md ${profile ? 'bg-gray-100' : ''}`}>
                    <img src={getAssetImages('default/default_v3-usrnophoto1.png')} className='rounded-full w-8' />
                    <p className='font-medium text-gray-500 tracking-tight line-clamp-1 text-sm'>{dataUser?.data?.name || 'name'}</p>
                </button>
            }
            {profile && (
                <div className='absolute mt-1 z-10 w-[27rem] tracking-tight bg-white shadow-2xl rounded-md right-0 border mx-10 flex flex-col px-3 py-1'>
                    <div className='px-5 gap-3 flex border shadow py-2 items-center rounded-lg'>
                        <img src={getAssetImages('default/default_v3-usrnophoto1.png')} className='rounded-full w-10 shadow' />
                        <div className='flex flex-col'>
                            <p className='font-semibold'>{dataUser?.data?.fullName || 'null'}</p>
                            <Link to='#' className='text-gray-500 text-base font-normal flex gap-1 items-center'>
                                <img src={getAssetImages('default/pakai_promo_member_silver.png')} className='w-5' />
                                <p className='tracking-tight'>{dataUser?.data?.member || 'null'}</p>
                                <span className='next-button'></span>
                            </Link>
                        </div>
                    </div>
                    <div className='flex my-3 gap-2'>
                        <div className='w-[60%] flex flex-col border-r px-3'>
                            <div className='hover:bg-gray-100 rounded-md py-2 px-3 w-full'>
                                <Link to={'/'} className='flex flex-col gap-1'>
                                    <div className='flex justify-between w-full items-center'>
                                        <img src={getAssetImages('/product/plus.png')} />
                                        <p className='text-green-500 text-xs tracking-tight font-semibold'>Langganan</p>
                                    </div>
                                    <p className='font-bold text-sm tracking-tight leading-tight'>
                                        Nikmatin Bebas Ongkir tanpa batas!
                                    </p>
                                    <p className='text-xs text-gray-400 tracking-tight'>Min. belanja Rp0, bebas biaya aplikasi~</p>
                                </Link>
                            </div>
                            <div className='border-y mt-2 flex w-full py-2'>
                                <Link to={'/'} className='w-full px-2 flex flex-row justify-between gap-1 items-center hover:bg-gray-100 rounded-md'>
                                    <div className='flex flex-row justify-between items-center gap-2'>
                                        <img src={getAssetImages('/product/pemuda-logo-short.png')} className='w-6 h-6' />
                                        <p className='text-gray-500 text-sm tracking-tight font-semibold'>Gopay</p>
                                    </div>
                                    <p className='text-xs text-green-500 font-semibold tracking-tight'>Aktifkan</p>
                                </Link>
                            </div>
                            <div className='border-b flex w-full  py-2'>
                                <Link to={'/'} className='w-full px-2 flex flex-row justify-between gap-1 items-center hover:bg-gray-100 rounded-md'>
                                    <div className='flex flex-row justify-between items-center gap-2'>
                                        <img src={getAssetImages('/product/5ca9b45d.png')} className='w-6 h-6' />
                                        <p className='text-gray-500 text-sm tracking-tight leading-tight font-semibold'>Tokopedia Card</p>
                                    </div>
                                    <p className='text-xs text-green-500 font-semibold tracking-tight w-full text-end'>Daftar Sekarang</p>
                                </Link>
                            </div>
                            <div className='border-b flex w-full  py-2 mb-1'>
                                <Link to={'/'} className='w-full px-2 flex flex-row justify-between gap-1 items-center hover:bg-gray-100 rounded-md'>
                                    <div className='flex flex-row justify-between items-center gap-2'>
                                        <i className='saldo'></i>
                                        <p className='text-gray-500 text-sm tracking-tight font-semibold'>Saldo</p>
                                    </div>
                                    <p className='text-sm text-gray-600 font-semibold tracking-tight'>Rp0</p>
                                </Link>
                            </div>

                            <Link to={'/'} className='text-gray-500 text-sm rounded-md hover:bg-gray-100 py-1 px-2 flex justify-between'>
                                <p className='tracking-tight'>TokoMember</p>
                                <p className='tracking-tight'>0</p>
                            </Link>
                            <Link to={'/'} className='text-gray-500 text-sm rounded-md hover:bg-gray-100 py-1 px-2 flex justify-between'>
                                <p className='tracking-tight'>Misi Seru</p>
                                <p className='tracking-tight'>0</p>
                            </Link>
                            <Link to={'/'} className='text-gray-500 text-sm rounded-md hover:bg-gray-100 py-1 px-2 flex justify-between'>
                                <p className='tracking-tight'>Kupon Saya</p>
                                <p className='tracking-tight'>0</p>
                            </Link>
                        </div>
                        <div className='w-[40%] flex flex-col justify-between'>
                            <div className='w-full flex flex-col'>
                                <Link to={'/pembelian'} className='text-gray-500 text-base rounded-md hover:bg-gray-100 py-1 px-2'>Pembelian</Link>
                                <Link to={'/pembelian'} className='text-gray-500 rounded-md hover:bg-gray-100 py-1 px-2'>Whistlist</Link>
                                <Link to={'/pembelian'} className='text-gray-500 rounded-md hover:bg-gray-100 py-1 px-2'>Toko Favorit</Link>
                                <Link to={'/pembelian'} className='text-gray-500 rounded-md hover:bg-gray-100 py-1 px-2'>Pengaturan</Link>
                            </div>
                            <div className='w-full py-1 px-2 hover:bg-gray-100 text-gray-500 rounded-md'>
                                <button className='flex items-center gap-2' onClick={handleLogout}>Keluar <span className='logout'></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ModalProfil
