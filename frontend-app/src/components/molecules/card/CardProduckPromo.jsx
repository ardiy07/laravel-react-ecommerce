import React from 'react'
import { formatCurrency } from '../../../utils/formatCurency'

function CardProduckPromo(props) {
  return (
    <div className=" max-w-48 rounded-lg bg-white overflow-hidden shadow border h-[17.5rem] my-3">
            <a href={props.url}>
                <img className="w-52 h-44" src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2023/8/24/d52da835-4051-4fb4-a15a-f4c4ef7ba5be.jpg" alt={props.alt} />
                <div className="px-3 py-1">
                    <p className="text-black font-bold text-base mb-1">{formatCurrency(props.priceDiscount)}</p>
                    <div className='flex items-center gap-1 mb-2'>
                        <p className='font-medium text-gray-400 text-xs line-through'>{formatCurrency(props.price)}</p>
                        <p className='font-bold text-red-500 text-xs'>{props.persentage}%</p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <div className="relative pt-1">
                            <div className="overflow-hidden h-1 w-40 text-xs flex rounded bg-gray-200">
                                <div style={{ width: `20%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                            </div>
                            <p className='text-gray-500 font-medium text-xs'>Segera Habis</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
  )
}

export default CardProduckPromo