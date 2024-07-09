import React from 'react'
import { Link } from 'react-router-dom'
import { discountPercentage, formatCurrency } from '../../utils/formatUtils'

function CardProduct({ url, image, alt, name, price, priceSale, diskon, promo, city, rating, order, icon }) {
    return (
        <div className="max-w-48 rounded-lg bg-white overflow-hidden shadow border h-[21rem] my-4">
            <Link to={url}>
                <img className="w-52 h-44" src={image} alt={alt} />
                <div className="px-3 py-1 mb-5 flex flex-col gap-[0.2rem]">
                    <p className="text-sm font-normal line-clamp-2 capitalize">{name}</p>
                    {priceSale !== 0 ?
                        <>
                            <p className="text-black font-bold text-base">{formatCurrency(priceSale)}</p>
                            <div className='flex items-center gap-2'>
                                <p className='text-xs line-through text-gray-500 font-medium'>{formatCurrency(price)}</p>
                                <span className='text-xs text-red-500 font-bold'>{diskon || 0}%</span>
                            </div>
                        </>
                        :
                        <p className="text-black font-bold text-base">{formatCurrency(price)}</p>
                    }
                    {promo !== null &&
                        <p className='text-xs bg-red-200 text-red-400 font-bold w-fit px-1 py-[0.1rem] mb-2'>{promo}</p>
                    }

                    <div className='flex items-center gap-1 mb-1'>
                        <i className={`${icon || 'toko-official'}`}></i>
                        {icon === 'tokopedia' ?
                            <p className='font-medium text-gray-500 text-xs capitalize'>Dilayani Tokopedia</p>
                            :
                            <p className='font-medium text-gray-500 text-xs capitalize'>{city}</p>
                        }
                    </div>
                    <div className='flex items-center gap-1'>
                        <i className='stars-icon'></i>
                        <p className='text-gray-500 font-medium text-xs'>{rating}</p>
                        <span className='border border-gray-500 h-3'></span>
                        <p className='text-gray-500 font-medium text-xs'>{order} terjual</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CardProduct
