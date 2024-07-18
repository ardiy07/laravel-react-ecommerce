import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchHomeProduct } from '../../../home/services';
import { APP_DEBUG } from '../../../../config/env';
import { CardProduct } from '../../../../components';
import LoadingCard from '../../../../components/loading/LoadingCard';

function ProductDetailLainnya({category, categorySlug}) {
    const dispatch = useDispatch();
    const { data, status } = useSelector((state) => state.productHome);


    useEffect(() => {
        if (category){
            dispatch(fetchHomeProduct({ query: category, limit: 12 }));
        }
    }, [dispatch, category, categorySlug]);

    if (APP_DEBUG) {
        console.log('Category Product: ', category);
        console.log('Data Product Lainnya: ', data);
    }


    return (
        <div className='pb-10 pt-5'>
            <div className='flex justify-between items-center'>
                <h3 className='font-bold text-2xl text-gray-700'>Product lainnya untukmu</h3>
                <Link to={`/rekomendasi?exat=rekom_2&prod=${categorySlug}`} className='font-bold text-green-500 text-base tracking-tight' >Lihat Semuanya</Link>
            </div>
            <div className='grid grid-cols-6 pt-4'>
                {/* Status Loading */}
                {status === 'pending' &&
                    <>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <LoadingCard />
                        ))}
                    </>
                }

                {/* Succeeded */}
                {status === 'succeeded' && data?.map((item, index) => (
                    <CardProduct
                        key={index}
                        image={item.product.image}
                        name={item.product.name}
                        price={item.product.price}
                        priceSale={item.product.priceSale}
                        productSlug={item.product.productSlug}
                        type={item.product.varian}
                        order={item.product.order}
                        rating={item.product.rating}
                        promo={null}
                        icon={item.product.shope.icon}
                        city={item.product.shope.city}
                        shopeSlug={item.product.shope.slug}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductDetailLainnya