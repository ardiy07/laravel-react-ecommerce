import React from 'react'
import { Link } from 'react-router-dom'

function LinkStoreSearch(props) {
    return (
        <Link to={props.to} className='my-auto font-semibold tracking-tight capitalize hover:bg-gray-100 rounded-lg'>
            <div className='flex py-2'>
                <div className='my-auto px-2'>
                    <img src="./vite.svg" alt="coba logo" />
                </div>
                <div className='flex-grow px-2'>
                    <h5 className='font-semibold line-clamp-1'>{props.judul}</h5>
                    <p className='text-sm text-gray-600 font-medium'>{props.title}</p>
                </div>
            </div>
        </Link>
    )
}

export default LinkStoreSearch
