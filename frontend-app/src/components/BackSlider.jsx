import React from 'react'

function BackSlider({onOpen, onHidden, onClick}) {
    return (
        <div className='h-full absolute flex items-center '>
            <button className={`${onHidden ? 'hidden' : ''} z-10  flex justify-center items-center  bg-gray-100  rounded-full shadow border transform transition duration-500 cursor-pointer ${onHidden ? 'hidden' : ''} ${onOpen ? ' translate-x-0 opacity-100' : 'opacity-0 translate-x-full'}`} onClick={onClick}>
                <i className='back-button m-1 '></i>
            </button>
         </div>
    )
}

export default BackSlider
