import React from 'react'
import './index.css'

function NextButton(props) {
    return (
        <button onClick={props.onClick} className={`${props.onHidden ? 'hidden' : ''} z-10 bg-gray-100 right-0 flex justify-center items-center rounded-full shadow border absolute transform transition duration-500 cursor-pointer w-10 h-10 ${props.onHidden ? 'hidden' : ''} ${props.onOpen ? 'translate-x-full opacity-100 mr-10' : 'translate-x-0 opacity-0 mr-10'}`}>
            <i className='next-button'></i>
        </button>
    )
}

export default NextButton