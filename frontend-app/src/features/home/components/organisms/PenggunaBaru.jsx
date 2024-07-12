import React, { Suspense, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import SliderPenggunaBaru from '../molecules/SliderPenggunaBaru'
import { fetchProductPromotion } from '../../services';
import { APP_DEBUG } from '../../../../config/env';
import { CountDownTimer } from '../../../../components';

function PenggunaBaru() {
  const dispatch = useDispatch();
  const { data, expiredAt } = useSelector((state) => state.promotionProduct);

  useEffect(() => {
    dispatch(fetchProductPromotion());
  }, [dispatch]);

  if (APP_DEBUG) {
    console.log('Data Pengguna Baru', data);
  }

  return (
    <div className='mx-16 mb-10 pb-5 border-b'>
      <div className='flex items-end gap-3 mb-3'>
        <h2 className='text-2xl font-bold'>Khusus Pengguna Baru</h2>
        <p className='text-gray-500 font-medium'>Berakhir dalam</p>
        <p>
          <Suspense fallback={<div>Loading.....</div>}>
            <CountDownTimer expirationString={expiredAt} />
          </Suspense>
        </p>
        <Link to="/" className='font-bold text-green-600 text-base tracking-tight'>Lihat Semua</Link>
      </div>
      <SliderPenggunaBaru data={data} />
    </div>
  )
}

export default PenggunaBaru
