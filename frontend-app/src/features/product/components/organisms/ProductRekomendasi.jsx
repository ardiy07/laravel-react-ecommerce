import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByShope } from '../../services';
import { fetchHomeProduct } from '../../../home/services';
import LoadingCard from '../../../../components/loading/LoadingCard';
import { CardProduct } from '../../../../components';

function ProductRekomendasi({ exat, prod, shope }) {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [dataProduct, setDataProduct] = useState([]);

    const { data, status, meta } = useSelector(state => exat === 'rekom_1' ? state.productShope : state.productHome);

    useEffect(() => {
        if (exat === 'rekom_1') {
            dispatch(fetchProductByShope({ shope, limit: 12 }));
        } else {
            dispatch(fetchHomeProduct({ query: prod.replace(/-/g, ' '), limit: 12, page }));
        }
    }, [dispatch, exat, shope, prod, page]);

    useEffect(() => {
        if (data && dataProduct.length === 0) {
            setDataProduct(data);
        }
    }, [data, dataProduct]);

    const fetchData = () => {
        dispatch(exat === 'rekom_1' ?
            fetchProductByShope({ shope, limit: 12, page: page + 1 }) :
            fetchHomeProduct({ query: prod.replace(/-/g, ' '), limit: 12, page: page + 1 })
        ).then(response => {
            const newData = response.payload.data;
            setDataProduct(prevData => [...prevData, ...newData]);
        }).catch(error => {
            console.error('Error fetching more data:', error);
        });
    };

    const handlePage = () => {
        setPage(page + 1);
        if (status === 'succeeded') {
            fetchData();
        }
    };

    return (
        <div className='mb-5'>
            <div className='grid grid-cols-6 pt-4'>
                {/* Status Loading */}
                {status === 'pending' && (
                    Array.from({ length: 12 }).map((_, index) => (
                        <LoadingCard key={index} />
                    ))
                )}

                {/* Succeeded */}
                {status === 'succeeded' && dataProduct.map((item, index) => (
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
            {/* Pagination Button */}
            {status === 'succeeded' && page !== meta.last_page && (
                <div className='mt-5 flex items-center justify-center'>
                    <button
                        className='text-green-600 font-bold text-base border border-green-600 py-2 px-14 rounded-lg'
                        onClick={handlePage}
                    >
                        Muat Lebih Banyak
                    </button>
                </div>
            )}
        </div>
    );
}

export default ProductRekomendasi;
