import React from 'react'
import { Link } from 'react-router-dom'
import { getAssetIcons, getAssetImages } from '../../../utils/pathUtils'
import { Input } from '../../../components/atoms'

function RegisterPage() {
  return (
    <div className='flex flex-col py-5 mx-32'>
      <div className='mb-16 flex justify-center'>
        <Link to={'/'}>
          <img src={getAssetImages("e5b8438b.svg")} alt="Logo" className=' w-38' />
        </Link>
      </div>
      <div className='flex justify-center gap-20 mb-20'>
        <div className='flex flex-col gap-3 items-center'>
          <img src={getAssetImages("default/register_icon_new.png")} alt="Register" className='w-96' />
          <h4 className='font-bold text-xl'>Jual Beli Mudah Hanya di Tokopedia</h4>
          <p className='text-sm font-medium text-gray-400'>Gabung dan rasakan kemudahan bertransaksi di Tokopedia</p>
        </div>
        <div className='flex flex-col justify-start w-96 bg-white px-7 gap-4 border py-7 rounded shadow-xl'>
          <div className='flex flex-col items-center'>
            <h3 className='text-xl font-bold'>Daftar Sekarang</h3>
          </div>
          <div className=''>
            <form className='flex flex-col gap-4'>
              <Input label={'Email'} type={'email'} name={'email'} placeholder={'Masukkan email'} />
              <Input label={'Password'} type={'password'} name={'password'} placeholder={'Masukkan password'} />
              <button className='w-full bg-green-600 py-2 rounded-lg text-white font-bold text-base' >Daftar</button>
            </form>
          </div>
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
      </div>

      <div className='mb-12 flex justify-center items-center gap-2'>
        <p className='text-gray-500'>© 2009-2024,&nbsp;</p>
        <Link to={'/help'} className='text-green-500 font-semibold'>PT TokopediaTokopedia Care</Link>
      </div>
    </div>
  )
}

export default RegisterPage