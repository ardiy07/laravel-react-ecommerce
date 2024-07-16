import React from 'react'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../../../../utils/formatUtils'

function CardMarketHeader({ image, productSlug, name, quantity, price, priceSale }) {
    return (
        <div className='pt-2 max-h-80 overflow-y-auto'>
            <div className='px-5 flex gap-2 mb-1'>
                <div className='w-20'>
                    <img src={image} alt={name} width="70" />
                </div>
                <div className=' w-52'>
                    <Link to={`/${productSlug}`} className='line-clamp-1 tracking-tight'>
                        {name}
                    </Link>
                </div>
                <div className='flex flex-col items-end'>
                    <div className='flex gap-1'>
                        <p className='font-bold'>{quantity}</p>
                        <p>X</p>
                        {priceSale != 0 ? (
                            <p className='font-bold tracking-tight'>{formatCurrency(priceSale)}</p>
                        ) : (
                            <p className='font-bold tracking-tight'>{formatCurrency(price)}</p>
                        )}
                    </div>
                    {priceSale != 0 &&
                        <div>
                            <p className=' line-through font-normal text-gray-400 tracking-tight'>{formatCurrency(price)}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CardMarketHeader
