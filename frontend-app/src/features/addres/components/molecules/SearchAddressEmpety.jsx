import React from 'react'
import { getAssetImages } from '../../../../utils/pathUtils'

function SearchAddressEmpety() {
    return (
        <div className='w-full flex flex-col'>
            <div className='flex flex-col justify-center items-center py-4 gap-3'>
                <img src={getAssetImages("default/map-not.png")} alt="Not Found" className=' w-48' />
                <div className='flex flex-col items-center leading-tight tracking-tight gap-1'>
                    <p className='font-bold text-gray-800 text-xl'>Oops, lokasi tidak ditemukan</p>
                    <p className='text-gray-600 font-semibold'>Coba periksa kembali penulisanmu</p>
                </div>
            </div>
        </div>
    )
}

export default SearchAddressEmpety