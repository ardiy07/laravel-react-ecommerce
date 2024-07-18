import React, { Suspense, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { MainTamplate } from '../../templates';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailProduct } from '../services';
import { BodyDetailProduct, CheckoutProduct, ProductDetailLainnya, ProductShope } from '../components';
import useAuth from '../../../hooks/useAuth';
import { APP_DEBUG } from '../../../config/env';

function ProductDetailPage() {
  const { productSlug, shopeSlug } = useParams();
  const parts = productSlug.split('-v-');
  const additionalInfo = parts[1];

  const dispatch = useDispatch();
  const { isLogin } = useAuth();
  const { data, status } = useSelector((state) => state.productDetail);
  const category = useSelector((state) => state.productDetail.data.product?.category?.name);
  const categorySlug = useSelector((state) => state.productDetail.data.product?.category?.slug);

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
              <BodyDetailProduct data={data} />
            </Suspense>
            <div className='w-96'>
              <Suspense fallback={<div>Loading.....</div>}>
                <CheckoutProduct data={data} auth={isLogin} />
              </Suspense>
            </div>
          </div>
        }
        <div className='px-14'>
          <ProductShope shope={shopeSlug}/>
          <ProductDetailLainnya category={category} categorySlug={categorySlug} />
        </div>
      </div>
    </MainTamplate>
  )
}

export default ProductDetailPage
