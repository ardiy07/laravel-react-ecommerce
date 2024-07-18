import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavbarHome from '../molecules/NavbarHome';
import DataNavbar from '../data/DataNavbar.json';
import CardNavbar from '../atoms/CardNavbar';
import { CardProduct } from '../../../../components';
import { fetchHomeProduct } from '../../services';
import { APP_DEBUG } from '../../../../config/env';
import LoadingCard from '../../../../components/loading/LoadingCard';

function ProductHome() {
  const [activeIndex, setActiveIndex] = useState('pria');
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { data, meta, status } = useSelector((state) => state.productHome);
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    dispatch(fetchHomeProduct({ query: activeIndex, limit: 24, page: page }));
  }, [dispatch, activeIndex]);

  useEffect(() => {
    if (data && dataProduct.length === 0) {
      setDataProduct(data);
    }
  }, [data, dataProduct]);

  const handleClick = (slug) => {
    setActiveIndex(slug);
    setPage(1);
    setDataProduct([]);
  };

  const handlePage = () => {
    setPage(page + 1);
    if (status === 'succeeded') {
      dispatch(fetchHomeProduct({ query: activeIndex, limit: 24, page: page + 1 })).then((response) => {
        const newData = response.payload.data;
        setDataProduct([...dataProduct, ...newData]);
      }).catch((error) => {
        console.error('Error fetching more data:', error);
      });
    }
  };

  if (APP_DEBUG) {
    console.log('Data Product Home', data);
    console.log('Meta Product Home', meta);
  }

  return (
    <>
      <NavbarHome>
        {DataNavbar.map((item, index) => (
          <CardNavbar key={index} title={item.title} background={item.background} active={item.slug == activeIndex} onClick={() => handleClick(item.slug)} />
        ))}
      </NavbarHome>
      <div className='mb-8 mx-16'>

        {/* Status Loading */}
        {status === 'pending' &&
          <div className='grid grid-cols-6'>
            {Array.from({ length: 24 }).map((_, index) => (
              <LoadingCard />
            ))}
          </div>
        }

        {/* Status Sukses */}
        {status === 'succeeded' &&
          <>
            <div className='grid grid-cols-6'>
              {dataProduct.map((item, index) => (
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
            {page !== meta.last_page &&
              <div className='mt-5 flex items-center justify-center'>
                <button className='text-green-600 font-bold text-base border border-green-600 py-2 px-14 rounded-lg' onClick={handlePage}>
                  Muat Lebih Banyak
                </button>
              </div>
            }
          </>
        }

      </div>
    </>
  );
}

export default ProductHome;
