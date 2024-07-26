import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/icons.css'
import { capitalize, discountPercentage, formatCurrency, formatOrder } from '../../utils/formatUtils'

function CardProduct({ shopeSlug, productSlug, image, name, price, priceSale, promo, city, rating, order, icon }) {
    const [hover, setHover] = useState(false);
    return (
        <div className="max-w-48 rounded-lg bg-white overflow-hidden shadow border h-[21rem] my-4" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
            <Link to={'/' + shopeSlug + '/' + productSlug}>
                <img className="w-52 h-44" src={image} alt={name} />
                <div className="px-3 py-1 mb-5 flex flex-col gap-[0.2rem]">
                    <p className="text-sm font-normal line-clamp-2 capitalize">{name}</p>
                    {priceSale != 0 ?
                        <>
                            <p className="text-black font-bold text-base">{formatCurrency(priceSale)}</p>
                            <div className='flex items-center gap-2'>
                                <p className='text-sm line-through text-gray-500 font-medium'>{formatCurrency(price)}</p>
                                <span className='text-sm text-red-500 font-bold'>{discountPercentage(price, priceSale)}%</span>
                            </div>
                        </>
                        :
                        <p className="text-black font-bold text-base">{formatCurrency(price)}</p>
                    }
                    {promo !== null &&
                        <p className='text-sm bg-red-200 text-red-400 font-bold w-fit px-1 py-[0.1rem] mb-2'>{promo}</p>
                    }

                    <div className='flex items-center gap-1 mb-1'>
                        <i className={`${icon}`}></i>
                        {icon === 'tokopedia' ?
                            <p className='font-medium text-gray-500 text-sm capitalize'>Dilayani Tokopedia</p>
                            :
                            <div className='h-4 overflow-y-hidden'>
                                <p className={`font-medium text-gray-500 text-sm duration-200 ${hover ? '-translate-y-full' : 'translate-y-0'}`}>
                                    {capitalize(city)}
                                </p>
                                <p className={`font-medium text-gray-500 text-sm duration-200 line-clamp-1 ${hover ? '-translate-y-full' : 'translate-y-0'}`}>
                                    {capitalize(shopeSlug.replace(/-/g, ' '))}
                                </p>    
                            </div>
                        }
                    </div>
                    <div className='flex items-center gap-1'>
                        <i className='stars-icon'></i>
                        <p className='text-gray-500 font-medium text-sm'>{rating}</p>
                        <span className='border border-gray-500 h-3'></span>
                        <p className='text-gray-500 font-medium text-sm'>{formatOrder(order)} terjual</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CardProduct
