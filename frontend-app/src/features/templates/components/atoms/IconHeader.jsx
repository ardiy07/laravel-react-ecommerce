import React from 'react'

function IconHeader(props) {
    return (
        <span className={`body-icon-header hover:bg-gray-100 rounded-md ${props.isOpen ? 'bg-gray-100' : ''}`}>
            <i className={props.icon}></i>
            {props.count > 0 && <span className='absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 text-xs text-white flex justify-center items-center'>{props.count}</span>}
        </span>
    )
}

export default IconHeader
