import React from 'react'
import { Link } from 'react-router-dom'

function CardTrending(props) {
    return (
        <Link to={`/search?query=${props.name}`} className='flex gap-5 bg-white rounded-lg items-center border shadow-md'>
            <div className='w-fit'>
                <img src={props.image} alt={props.name} className='object-cover rounded-s-lg w-40' />
            </div>
            <div className='w-full'>
                <h4 className='font-bold text-lg line-clamp-1'>{props.name}</h4>
                <p className='text-gray-500 font-normal'>{props.count} produk</p>
            </div>
        </Link>
    )
}

export default CardTrending