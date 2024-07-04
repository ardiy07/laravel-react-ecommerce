import React from 'react'
import { Link } from 'react-router-dom'
import { getAssetImages } from '../../../utils/pathUtils'
import { BodyLogin } from '../components'


function LoginPage() {
    return (
        <div className='flex flex-col items-center py-5 mx-32'>
            <div className='mb-16 flex justify-center'>
                <Link to={'/'}>
                    <img src={getAssetImages("e5b8438b.svg")} alt="Logo" className=' w-38' />
                </Link>
            </div>

            <BodyLogin />

            <div className='mt-32 flex justify-center items-center gap-2'>
                <p className='text-sm tracking-tight'>© 2009-2024, PT Tokopedia</p>
                <span className='w-[0.05rem] h-4 bg-gray-400 mx-2'></span>
                <Link to={'/help'} className='text-green-600 font-bold text-sm tracking-tight'>Bantuan</Link>
            </div>
        </div>
    )
}

export default LoginPage