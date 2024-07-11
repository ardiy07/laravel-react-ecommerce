import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { MainTamplate } from '../../templates';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailProduct } from '../services';
import { BodyDetailProduct, CheckoutProduct} from '../components';
import useAuth from '../../../hooks/useAuth';

function ProductDetail() {
  const { productSlug } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.productDetail);
  const { isLogin } = useAuth();

  useEffect(() => {
    dispatch(fetchDetailProduct(productSlug));
  }, [dispatch, productSlug])

  return (
    <MainTamplate >
      <div className='bg-gray-50'>
        <div className='flex max-w-screen px-14 gap-3 py-6'>
          <BodyDetailProduct data={data} />
          <div className='w-96'>
            <CheckoutProduct data={data} auth={isLogin}/>
          </div>
        </div>
      </div>
    </MainTamplate>
  )
}

export default ProductDetail
