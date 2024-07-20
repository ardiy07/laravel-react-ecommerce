import React from 'react'
import GaleriProduct from '../molecules/GaleriProduct'
import TitleDetailProduct from '../molecules/TitleDetailProduct'
import RateDetailProduct from '../molecules/RateDetailProduct'
import { discountPercentage, formatCurrency } from '../../../../utils/formatUtils'

function BodyDetailProduct({ data }) {
    if (!data || !data.product) {
        return <div>Loading...</div>;
    }
    return (
        <div className='flex h-fit bg-white px-4 py-5 gap-5 shadow-md rounded-lg border'>
            <div className='pr-5'>
                <GaleriProduct image={data.product.image} />
            </div>
            <div className='w-full flex flex-col'>
                {/* Title */}
                <TitleDetailProduct icon={data.product.shope.icon} name={data.product.name} />
                {/* Rat, Order */}
                <RateDetailProduct rating={data.product.rating} order={data.product.order} review={data.product.review}/>
                {/* Price */}
                <div className='bg-gray-50 mt-3 py-2 rounded-lg px-2 flex gap-4 items-center'>
                    {data.product.priceSale != 0 ?
                        <>
                            <p className=' text-lg font-medium line-through text-gray-400'>{formatCurrency(data.product.price)}</p>
                            <p className='text-xl font-semibold'>{formatCurrency(data.product.priceSale)}</p>
                            <p className='text-sm font-medium bg-green-500 px-2 rounded text-white'>{discountPercentage(data.product.price, data.product.priceSale)}% OFF</p>
                        </>
                        :
                        <p className=' text-xl font-semibold'>{formatCurrency(data.product.price)}</p>
                    }
                </div>
                {/* Description */}
                <div className='mt-2'>
                    <p className='text-justify leading-tight tracking-tight'>
                        {data.product.deskripsi}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BodyDetailProduct
