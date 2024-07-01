import React from 'react'

function CardTrending(props) {
    return (
        <a href={props.url} className='grid grid-flow-col bg-white rounded-lg items-center border shadow-md'>
            <div className='w-full'>
                <img src="https://images.tokopedia.net/img/cache/100-square/VqbcmM/2024/5/24/54a01526-7ad5-4495-8fd1-4b9e885b94e1.png.webp?ect=4g" className='object-cover rounded-s-lg' />
            </div>
            <div className=''>
                <h4 className='font-bold text-lg'>{props.name}</h4>
                <p className='text-gray-500 font-normal'>{props.count} produk</p>
            </div>
        </a>
    )
}

export default CardTrending