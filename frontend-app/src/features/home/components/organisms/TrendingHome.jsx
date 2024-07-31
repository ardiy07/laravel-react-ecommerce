import React, { useEffect, useState } from 'react'
import CardTrending from '../atoms/CardTrending'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductTrending } from '../../services';
import { APP_DEBUG } from '../../../../config/env';
import Refresh from '../../../../components/icon/Refresh';
import LoadingTrending from '../../../../components/loading/LoadingTrending';

function TrendingHome() {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const [refresh, setRefresh] = useState(false);
    const { data, status } = useSelector((state) => state.productTrending);

    useEffect(() => {
        dispatch(fetchProductTrending(page));
    }, [dispatch]);

    if (APP_DEBUG) {
        console.log('Data Trending:', data);
    }

    const handleRefresh = () => {
        // refresh
        setRefresh(true);
        setTimeout(() => {
            setRefresh(false);
        }, 1000);

        // data
        setPage(page + 1);
        dispatch(fetchProductTrending(page + 1));
    }

    if (!data) {
        <div>Loading...</div>
    }


    return (
        <div className='mx-16 mb-10 pb-5 border-b'>
            <div className='flex items-end gap-3 mb-3'>
                <h2 className='text-2xl font-bold'>Lagi trending, nih</h2>
                <button className='flex gap-2' onClick={handleRefresh}>
                    <Refresh refresh={refresh} />
                    <span className='font-bold text-green-500'>
                        Refresh Lainnya
                    </span>
                </button>
            </div>
            <div className='grid grid-cols-4 grid-rows-2 gap-5 py-3 mt-4'>
                {/* Pending */}
                {status === 'pending' &&
                    <>
                        {Array.from({ length: 8 }).map((_, index) => (
                            <LoadingTrending key={index}/>
                        ))}
                    </>
                }

                {/* Success */}
                {status === 'succeeded' &&
                    <>
                        {data.map((item, index) => (
                            <CardTrending
                                key={index}
                                image={item.image}
                                name={item.name}
                                count={item.productCount}
                            />

                        ))}
                    </>
                }
            </div>
        </div>
    )
}

export default TrendingHome
