import React, { Suspense, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { MainTamplate } from '../../templates';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailProduct } from '../services';
import { BodyDetailProduct, CheckoutProduct } from '../components';
import useAuth from '../../../hooks/useAuth';
import { APP_DEBUG } from '../../../config/env';

function ProductDetail() {
  const { productSlug } = useParams();
  const parts = productSlug.split('-v-');
  const additionalInfo = parts[1];



  const dispatch = useDispatch();
  const { isLogin } = useAuth();
  const { data, status } = useSelector((state) => state.productDetail);



  useEffect(() => {
    dispatch(fetchDetailProduct(productSlug));
  }, [dispatch, productSlug])

  if (APP_DEBUG) {
    console.log('Id Data Produk :', productSlug);
  }

  return (
    <MainTamplate >
      <div className='bg-gray-50'>
        {status !== 'idle' &&
          <div className='flex max-w-screen px-14 gap-3 py-6'>
            <Suspense fallback={<div>Loading.....</div>}>
              <BodyDetailProduct data={data}/>
            </Suspense>
            <div className='w-96'>
              <Suspense fallback={<div>Loading.....</div>}>
                <CheckoutProduct data={data} auth={isLogin} />
              </Suspense>
            </div>
          </div>
        }
      </div>
    </MainTamplate>
  )
}

export default ProductDetail
