import React from 'react'
import GaleriProduct from '../molecules/GaleriProduct'
import TitleDetailProduct from '../molecules/TitleDetailProduct'
import RateDetailProduct from '../molecules/RateDetailProduct'
import { discountPercentage, formatCurrency } from '../../../../utils/formatUtils'
import LoadingBodyDetail from '../molecules/LoadingBodyDetail'
import { getAssetImageApi } from '../../../../utils/pathUtils'

function BodyDetailProduct({ data }) {
    if (!data || !data.product) {
        return <LoadingBodyDetail />;
    }
    return (
        <div className='flex h-fit bg-white px-4 py-5 gap-5 shadow rounded-lg border'>
            <div className='pr-5'>
                <GaleriProduct image={data.product.image} />
            </div>
            <div className='w-full flex flex-col'>
                {/* Title */}
                <TitleDetailProduct icon={data.product.shope.icon} name={data.product.name} />
                {/* Rat, Order */}
                <RateDetailProduct rating={data.product.rating} order={data.product.order} review={data.product.review} />
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

                {/* Type */}
                <div className='Pilih warna'>

                </div>

                <div className='mt-2'>
                    <div className='border-y px-4 py-2'>
                        <div className='flex gap-2'>
                            <div className='relative'>
                                <span className={`w-3 h-3 absolute rounded-full -top-1 -left-1 shadow-lg ${data.product.shope.lastActive === 'online' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                <img src={getAssetImageApi(data.product.shope.image)} className='w-8 rounded-full' />
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-sm font-medium tracking-tight'>{data.product.shope.name}</p>
                                <p className='text-xs tracking-tight'>
                                    {data.product.shope.lastActive === 'online' ? 
                                    'Online' : 
                                    `Online: ${data.product.shope.lastActive}`
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyDetailProduct
