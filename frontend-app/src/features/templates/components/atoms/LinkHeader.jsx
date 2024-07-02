import React from 'react'
import { Link } from 'react-router-dom'

function LinkHeader(props) {
    return (
        <Link to={props.to} className='text-gray-500 my-auto hover:text-green-600 text-xs font-semibold tracking-tight capitalize'>
            {props.children}
        </Link>
    )
}

export default LinkHeader
