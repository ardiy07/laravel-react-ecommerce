import React from 'react'
import { Link } from 'react-router-dom'

const Links = {
    TopHeader: (props) => {
        return (
            <Link to={props.href} className='text-gray-500 my-auto hover:text-green-600 text-xs font-semibold tracking-tight capitalize'>
                {props.children}
            </Link>
        )
    },
    BottonHeader: (props) => {
        return(
            <Link to={props.href} className='text-slate-500 my-auto hover:text-green-600 text-sm font-medium tracking-tight capitalize'>
                {props.children}
            </Link>
        )
    },
    Search: (props) => {
        return (
            <Link to={props.href} className='my-auto font-semibold tracking-tight capitalize hover:bg-gray-100 rounded-lg'>
                {props.children}
            </Link>
        )
    },
    Page: (props) => {
        return (
            <li onClick={props.onClick} className={`font-bold py-3 ${props.currentPage === props.title ? "text-green-500 border-b-2 border-green-500" : "border-b"}`}>
                {props.title}
            </li>
        )
    }
    
}

export default Links