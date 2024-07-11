import React from 'react'
import GaleriProduct from '../molecules/GaleriProduct'
import TitleDetailProduct from '../molecules/TitleDetailProduct'
import RateDetailProduct from '../molecules/RateDetailProduct'
import { discountPercentage, formatCurrency } from '../../../../utils/formatUtils'

function BodyDetailProduct({ data }) {
    return (
        <div className='flex w-full bg-white px-4 py-5 gap-5 shadow-md rounded-lg border'>
            <div className='pr-5'>
                <GaleriProduct image={data.image} />
            </div>
            <div className='w-full flex flex-col'>
                {/* Title */}
                <TitleDetailProduct iconShope={data.iconShope} name={data.name} />
                {/* Rat, Order */}
                <RateDetailProduct rating={data.rating} order={data.order} />
                {/* Price */}
                <div className='bg-gray-50 mt-3 py-2 rounded-lg px-2 flex gap-4 items-center'>
                    {data.priceSale !== 0 ?
                        <>
                            <p className=' text-lg font-medium line-through text-gray-400'>{formatCurrency(data.price)}</p>
                            <p className='text-xl font-semibold'>{formatCurrency(data.priceSale)}</p>
                            <p className='text-sm font-medium bg-green-500 px-2 rounded text-white'>{discountPercentage(data.price, data.priceSale)}% OFF</p>
                        </>
                        :
                        <p className=' text-xl font-semibold'>{formatCurrency(data.price)}</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default BodyDetailProduct
