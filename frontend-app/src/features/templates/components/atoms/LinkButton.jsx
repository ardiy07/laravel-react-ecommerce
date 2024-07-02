import React from 'react'
import { Link } from 'react-router-dom'

function LinkButton(props) {
    return (
        <Link to={props.href} className='text-slate-500 my-auto hover:text-green-600 text-sm font-medium tracking-tight capitalize'>
            {props.children}
        </Link>
    )
}

export default LinkButton
