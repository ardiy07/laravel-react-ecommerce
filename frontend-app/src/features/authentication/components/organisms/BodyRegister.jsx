import React from 'react'
import FormRegister from '../molecules/FormRegister'
import { getAssetIcons } from '../../../../utils/pathUtils'
import { Link } from 'react-router-dom'

function BodyRegister() {
    return (
        <div className='flex flex-col justify-start w-96 bg-white px-7 gap-4 border py-7 rounded-lg shadow-xl'>
            <div className='flex flex-col items-center'>
                <h3 className='text-xl font-bold'>Daftar Sekarang</h3>
            </div>
            <FormRegister />
            <div className='flex w-full justify-center items-center'>
                <span className=' w-[200%] bg-gray-300 h-[0.05rem]'></span>
                <p className='w-full text-center text-sm text-gray-400'>atau</p>
                <span className='w-[200%] bg-gray-300 h-[0.05rem]'></span>
            </div>
            <div className='w-full'>
                <button className='border w-full py-2 rounded-lg flex items-center justify-center gap-2'>
                    <img src={getAssetIcons("google.svg")} alt="Google" />
                    <span className='text-gray-500 font-semibold'>Google</span>
                </button>
            </div>
            <div className='flex flex-col items-center'>
                <p className='tracking-tight font-medium mb-1'>Sudah punya akun Tokopedia? <Link to={'/login'} className='text-green-600 font-semibold'>Masuk</Link></p>
                <p className='tracking-tight leading-tight text-xs font-medium text-center'>Dengan mendaftar, saya menyetujui</p>
                <p className='tracking-tight leading-tight text-xs font-medium text-center'>
                    <Link to={'/terms'} className='text-green-500 font-bold'>Syarat & Ketentuan</Link>
                    <span>&nbsp;serta&nbsp;</span>
                    <Link to={'/privacy'} className='text-green-500 font-bold'>Kebijakan Privasi Tokopedia.</Link>
                </p>
            </div>
        </div>
    )
}

export default BodyRegister
