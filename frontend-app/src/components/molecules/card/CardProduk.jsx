import React from 'react'
import { formatCurrency } from '../../../utils/formatCurency'
import './index.css'

function CardProduk(props) {
    return (
        <div className="max-w-48 rounded-lg bg-white overflow-hidden shadow border h-[21rem] my-4">
            <a href={props.url}>
                <img className="w-52 h-44" src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2023/8/24/d52da835-4051-4fb4-a15a-f4c4ef7ba5be.jpg" alt={props.alt} />
                <div className="px-3 py-1 mb-5 flex flex-col gap-[0.2rem]">
                    <p className="text-sm font-normal line-clamp-2">{props.title}</p>
                    <p className="text-black font-bold text-base">{formatCurrency(props.price)}</p>
                    <div className='flex items-center gap-2'>
                        <p className='text-xs line-through text-gray-500 font-medium'>{props.discount}</p>
                        <span className='text-xs text-red-500 font-medium'>95%</span>
                    </div>
                    <p className='text-xs bg-red-200 text-red-400 font-bold w-fit px-1 py-[0.1rem] mb-2'>{props.promo}</p>
                    <div className='flex items-center gap-1 mb-1'>
                        <i className='official-store'></i>
                        <p className='font-medium text-gray-500 text-xs'>Jakarta Utara</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <i className='stars-icon'></i>
                        <p className='text-gray-500 font-medium text-xs'>{props.rating}</p>
                        <span className='border border-gray-500 h-3'></span>
                        <p className='text-gray-500 font-medium text-xs'>{props.sold} terjual</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default CardProduk