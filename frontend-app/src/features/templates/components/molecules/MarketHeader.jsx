import React, { useState } from 'react'
import { getAssetImages } from '../../../../utils/pathUtils'
import IconHeader from '../atoms/IconHeader'

function MarketHeader({ onOpen, onClose, count, auth }) {
    const [isOpen, setIsOpen] = useState(false)

    const marketOpen = () => {
        setIsOpen(true)
        onOpen()
    }

    const marketClose = () => {
        setIsOpen(false)
        onClose()
    }

    const image = getAssetImages('empty-state-pp.png')

    return (
        <div className='relative' onMouseEnter={marketOpen} onMouseLeave={marketClose}>
            {isOpen && (
                <div className='mt-1 py-2 absolute z-50 w-[30rem] bg-white shadow-2xl rounded-md right-0 -mx-52 border'>
                    {auth ? (
                        <>
                            <div className='flex justify-between px-5 border-b pb-3'>
                                <p className='font-bold'>Keranjang {count > 0 && <span className='text-gray-400 font-normal'>(1)</span>}</p>
                                <a href='#' className="text-green-600 font-bold tracking-tight">Lihat</a>
                            </div>
                            {count == 0 ? (
                                <div className="flex flex-col gap-2 items-center justify-center my-7">
                                    <img className="mx-auto mt-10 mb-2" src={image} alt="market" width="30%" />
                                    <p className="font-bold text-xl">Wah, Keranjang belanjamu kosong</p>
                                    <p className="font-semibold text-gray-400 text-sm">Yuk, isi dengan barang-barang impianmu!</p>
                                    <a href="#" className="flex justify-center border-green-600 border rounded-md text-green-600 w-48 py-2 font-bold text-sm tracking-tight">
                                        Mulai Belanja
                                    </a>
                                </div>
                            ) : (
                                <div className='pt-2 max-h-96 overflow-y-auto'>
                                    <div className='px-5 flex gap-2 mb-1'>
                                        <div className='w-20'>
                                            <img src={image} alt="market" width="70" />
                                        </div>
                                        <div className=' w-52'>
                                            <a href='#' className='line-clamp-1'>
                                                ini merupaan hasil dari pencarian market
                                            </a>
                                        </div>
                                        <div className='flex flex-col items-end'>
                                            <div className='flex gap-1'>
                                                <p className='font-bold'>1</p>
                                                <p>X</p>
                                                <p className='font-bold'>Rp100.000</p>
                                            </div>
                                            <div>
                                                <p className=' line-through font-normal text-gray-400'>Rp. 200.000</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="flex flex-col gap-2 items-center justify-center my-7">
                            <img className="mx-auto mt-10 mb-2" src={image} alt="market" width="30%" />
                            <p className="font-bold text-xl">Wah, Keranjang belanjamu kosong</p>
                            <p className="font-semibold text-gray-400 text-sm">Yuk, isi dengan barang-barang impianmu!</p>
                            <a href="#" className="flex justify-center border-green-600 border rounded-md text-green-600 w-48 py-2 font-bold text-sm tracking-tight">
                                Mulai Belanja
                            </a>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default MarketHeader
