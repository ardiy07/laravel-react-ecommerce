import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchResultProduct } from '../../services/thunks/productThunks';
import { APP_DEBUG } from '../../../../config/env';
import SearchEmpety from '../molecules/SearchEmpety';
import { CardProduct } from '../../../../components';

function SearchResultProduct({ query }) {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { data, meta, status } = useSelector((state) => state.productSearchResult);
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    dispatch(fetchSearchResultProduct({ query: query, page: page }));
  }, [dispatch, query]);

  useEffect(() => {
    if (data && dataProduct.length === 0) {
      setDataProduct(data);
    }
  }, [data, dataProduct]);

  const handlePage = () => {
    setPage(page + 1);
    if (status === 'succeeded') {
      dispatch(fetchSearchResultProduct({ query: query, page: page + 1 })).then((response) => {
        const newData = response.payload.data;
        setDataProduct([...dataProduct, ...newData]);
      }).catch((error) => {
        console.error('Error fetching more data:', error);
      });
    }
  };

  if (APP_DEBUG) {
    console.log('Data Product Search', data);
  }


  return (
    <div>
      {data && data.length !== 0 ? 
        <>
          <div className='grid grid-cols-5'>
            {dataProduct.map((item, index) => (
              <CardProduct
              key={index}
              image={item.image}
              name={item.name}
              price={item.price}
              priceSale={item.priceSale}
              promo={null}
              type={item.value}
              icon={item.iconShope}
              city={item.city}
              rating={item.rating}
              order={item.order}
              shopeSlug={item.shopeSlug}
              productSlug={item.productSlug}
              />
            ))}
          </div>
          {page !== meta.last_page &&
            <div className='mt-5 flex items-center justify-center'>
              <button className='text-green-600 font-bold text-base border border-green-600 py-2 px-14 rounded-lg' onClick={handlePage}>
                Muat Lebih Banyak
              </button>
            </div>
          }
        </>
        :
        <>
        {status === 'failed' && <SearchEmpety />}
        </>
      }
    </div>
  )
}

export default SearchResultProduct
