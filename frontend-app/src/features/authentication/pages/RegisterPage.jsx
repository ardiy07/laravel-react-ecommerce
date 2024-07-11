import React from 'react'
import { Link } from 'react-router-dom'
import { getAssetImages } from '../../../utils/pathUtils'
import { BodyRegister } from '../components'

function RegisterPage() {
  

  return (
    <div className='flex flex-col py-5 mx-32'>
      <div className='mb-6 flex justify-center'>
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
        <BodyRegister />
      </div>

      <div className='mb-12 flex justify-center items-center gap-2'>
        <p className='text-gray-500'>© 2009-2024,&nbsp;</p>
        <Link to={'/help'} className='text-green-500 font-semibold'>PT TokopediaTokopedia Care</Link>
      </div>
    </div>
  )
}

export default RegisterPage