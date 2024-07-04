import React from 'react'
import { formatCurrency } from '../utils/formatCurency'
import { Link } from 'react-router-dom'

function CardProductPromo({url, image, alt, price, diskon, priceDiscount, stock, order}) {
    return (
        <div className=" max-w-48 rounded-lg bg-white overflow-hidden shadow border h-[17.5rem] my-3">
            <Link to={url || '/'}>
                <img className="w-52 h-44" src={image || "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2023/8/24/d52da835-4051-4fb4-a15a-f4c4ef7ba5be.jpg"} alt={alt || 'image'} />
                <div className="px-3 py-1">
                    <p className="text-black font-bold text-base mb-1">{formatCurrency(priceDiscount|| 0)}</p>
                    <div className='flex items-center gap-1 mb-2'>
                        <p className='font-medium text-gray-400 text-xs line-through'>{formatCurrency(price|| 0)}</p>
                        <p className='font-bold text-red-500 text-xs'>{diskon || 0}%</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <div className="relative pt-1">
                            <div className="overflow-hidden h-1 w-40 text-xs flex rounded bg-gray-200">
                                <div style={{ width: `${order}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                            </div>
                            <p className='text-gray-500 font-bold text-xs capitalize tracking-tight pt-1'>{stock || 'Tersedia'}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CardProductPromo
