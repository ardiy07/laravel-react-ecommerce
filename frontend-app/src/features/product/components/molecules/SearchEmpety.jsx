import React from 'react'
import { getAssetImages } from '../../../../utils/pathUtils'

function SearchEmpety() {
    return (
        <div className='bg-white flex mx-7 shadow border rounded-md px-10 py-4 gap-10 items-center'>
            <div className='w-fit flex items-center'>
                <img src={getAssetImages('/default/product-search-not-found-small.png')} className='w-32' />
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2 pb-2'>
                    <h3 className='font-bold text-2xl text-gray-600'>Oops, produk tidak ditemukan</h3>
                    <p className='text-base font-medium text-gray-600'>Coba kata kunci lain atau cek produk rekomendasi di bawah.</p>
                </div>
                <button className='bg-green-600  w-fit py-2 px-3 rounded-md'>
                    <span className='font-bold text-white'>Ganti kata Kunci</span>
                </button>
            </div>
        </div>
    )
}

export default SearchEmpety
