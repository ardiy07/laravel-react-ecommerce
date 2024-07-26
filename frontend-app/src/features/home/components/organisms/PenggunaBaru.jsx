import React, { Suspense, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SliderPenggunaBaru from '../molecules/SliderPenggunaBaru'
import { fetchProductPromotion } from '../../services';
import { APP_DEBUG } from '../../../../config/env';
import { CountDownTimer, LoadinButtonWhite, LoadingLazzy } from '../../../../components';

function PenggunaBaru() {
  const dispatch = useDispatch();
  const { promotion, status, data } = useSelector((state) => state.promotionProduct);

  useEffect(() => {
    dispatch(fetchProductPromotion());
  }, [dispatch]);

  if(APP_DEBUG){
    console.log('Pengguna Baru:', promotion);
    console.log('Product Pengguna Baru:', data);
    console.log('Status: ', status);
  }

  return (
    <div className='mx-16 mb-10 pb-5 border-b'>
      <div className='flex items-end gap-3 mb-3'>
        <h2 className='text-2xl font-bold'>Khusus Pengguna Baru</h2>
        <p className='text-gray-500 font-medium'>Berakhir dalam</p>
        <p>
          {status === 'pending' &&
            <div className='flex gap-3 animate-pulse'>
              <div className='bg-red-200 h-8 w-8 rounded-md'></div>
              <div className='bg-red-200 h-8 w-8 rounded-md'></div>
              <div className='bg-red-200 h-8 w-8 rounded-md'></div>
            </div>
          }
          {status === 'succeeded' &&
            <Suspense fallback={<LoadingLazzy />}>
              <CountDownTimer expirationString={promotion.endPromo} />
            </Suspense>
          }
        </p>
        <Link to="/" className='font-bold text-green-600 text-base tracking-tight'>Lihat Semua</Link>
      </div>
      <SliderPenggunaBaru />
    </div>
  )
}

export default PenggunaBaru
