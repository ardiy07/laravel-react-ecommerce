import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SliderKupon from '../molecules/SliderKupon'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductKupon } from '../../services';

function Kupon() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductKupon());
    }, [dispatch]);

    return (
        <div className='mx-16 mb-10 pb-5 border-b'>
            <div className='flex items-end gap-3 mb-4'>
                <h2 className='text-2xl font-bold'>Pake Kupon di atas</h2>
                <p className='text-gray-500 font-medium'>Ambil Produk Nyaris Gratisnya!</p>
                <Link to="/" className='font-bold text-green-600 text-base'>Lihat Semua</Link>
            </div>
            <SliderKupon/>
        </div>
    )
}

export default Kupon
