import React from 'react'
import { discountPercentage, formatCurrency, getStockStatus, orderPercentage } from '../../utils/formatUtils'
import { Link } from 'react-router-dom'

function CardProductPromo({shopeSlug, type, productSlug, image, alt, price, priceDiscount, stock, order}) {
    return (
        <div className=" max-w-48 rounded-lg bg-white overflow-hidden shadow border h-[17.5rem] my-3">
            <Link to={`/${shopeSlug}/${productSlug}${type && `-v-${type}`}`}>
                <img className="w-52 h-44" src={image} alt={alt} />
                <div className="px-3 py-1">
                    <p className="text-black font-bold text-base mb-1">{formatCurrency(priceDiscount)}</p>
                    <div className='flex items-center gap-1 mb-2'>
                        <p className='font-medium text-gray-400 text-xs line-through'>{formatCurrency(price)}</p>
                        <p className='font-bold text-red-500 text-xs'>{discountPercentage(price, priceDiscount)}%</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <div className="relative pt-1">
                            <div className="overflow-hidden h-1 w-40 text-xs flex rounded bg-gray-200">
                                <div style={{ width: `${orderPercentage(order, stock)}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                            </div>
                            <p className='text-gray-500 font-bold text-xs capitalize tracking-tight pt-1'>{getStockStatus(orderPercentage(order, stock))}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CardProductPromo
