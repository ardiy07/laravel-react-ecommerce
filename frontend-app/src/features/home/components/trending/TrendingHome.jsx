import React from 'react'
import { getAssetIcons } from '../../../../utils/pathUtils'
import CardTrending from '../../../../components/molecules/card/CardTrending'

function TrendingHome() {
    return (
        <div className='mx-16 mb-10 pb-5 border-b'>
            <div className='flex items-end gap-3 mb-3'>
                <h2 className='text-2xl font-bold'>Lagi trending, nih</h2>
                <button className='flex gap-2'>
                    <img src={getAssetIcons('refresh.svg')} className='w-6 h-6' />
                    <span className='font-bold text-green-500'>
                        Refresh Lainnya
                    </span>
                </button>
            </div>
            <div className='grid grid-cols-4 grid-rows-2 gap-5 py-3 mt-4'>
                {Array.from({ length: 8 }).map((_, index) => (
                    <CardTrending
                        key={index}
                        url='#'
                        image={index + 1}
                        name={`Kupon Diskon ${index + 1}`}
                        price={1000 * 10 + 300 * index}
                        count={15 + index * 50 + 1}
                        priceDiscount={8000 - 300 * index}
                    />
                ))}
            </div>
        </div>
    )
}

export default TrendingHome