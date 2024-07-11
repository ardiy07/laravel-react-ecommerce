import React from 'react'
import { formatOrder } from '../../../../utils/formatUtils'
import { Link } from 'react-router-dom'

function RateDetailProduct({ rating, order }) {
    const roundedRating = Math.round(rating);
    return (
        <div className='flex w-full mt-5 py-1 border-y px-2'>
            <div className='flex w-full gap-3'>
                <div className='flex items-center'>
                    <p className='pr-1 font-semibold underline'>{rating}</p>
                    {Array.from({ length: roundedRating }).map((_, index) => (
                        <i key={index} className='stars-icon px-1'></i>
                    ))}
                </div>
                <span className='w-[0.1rem] h-7 bg-gray-200'></span>
                <div className='flex items-center'>
                    <p className='font-semibold pr-1 underline'>
                        {formatOrder(order)}
                    </p>
                    <p className='text-gray-400 font-normal tracking-tight text-base'>
                        Terjual
                    </p>
                </div>
                <span className='w-[0.1rem] h-7 bg-gray-200'></span>
            </div>
            <div className=' tracking-tighter text-base font-medium text-gray-500'>
                <Link to='/'>Laporkan</Link>
            </div>
        </div>
    )
}

export default RateDetailProduct
