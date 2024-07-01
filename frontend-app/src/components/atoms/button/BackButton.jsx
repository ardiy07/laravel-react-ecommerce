import React from 'react'
import './index.css'

function BackButton(props) {
    return (
        <button onClick={props.onClick} className={`${props.onHidden ? 'hidden' : ''} z-10 bg-gray-100 flex justify-center items-center rounded-full shadow border absolute transform transition duration-500 cursor-pointer w-10 h-10 ${props.onHidden ? 'hidden' : ''} ${props.onOpen ? ' translate-x-0 opacity-100' : 'opacity-0 translate-x-full'}`}>
            <i className='back-button'></i>
        </button>
    )
}

export default BackButton