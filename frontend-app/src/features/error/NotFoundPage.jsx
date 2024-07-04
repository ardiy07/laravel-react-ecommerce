import React, { Suspense } from 'react'
import { getAssetImages } from '../../utils/pathUtils'
import { Link } from 'react-router-dom'
import { MainTamplate } from '../templates'

function NotFoundPage() {
    return (
        <Suspense>
            <MainTamplate>
                <div className='flex flex-col justify-center items-center gap-2 my-14'>
                    <div className='w-96'>
                        <img src={getAssetImages('default/il-error-not-found.png')} />
                    </div>
                    <h3 className='text-2xl font-bold'>Waduh, tujuanmu nggak ada!</h3>
                    <p className='text-gray-500 font-semibold text-base'>Mungkin kamu salah jalan atau alamat. Ayo balik sebelum gelap!</p>
                    <Link to={'/'} className='text-white bg-green-600 px-5 py-2 rounded-md font-semibold mt-4'>
                        Kembali
                    </Link>
                </div>
            </MainTamplate>
        </Suspense>
    )
}

export default NotFoundPage