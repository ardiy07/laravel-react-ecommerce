import React from 'react'

function NextSlider({ onOpen, onHidden, onClick }) {
    return (
        <div className='h-full absolute flex items-center right-0 top-0'>
            <button className={`${onHidden ? 'hidden' : ''} z-10   flex justify-center items-center  bg-gray-100  rounded-full shadow border transform transition duration-500 cursor-pointer ${onHidden ? 'hidden' : ''} ${onOpen ? 'translate-x-full opacity-100 mr-10' : 'translate-x-0 opacity-0 mr-10'}`} onClick={onClick}>
                <i className='next-button m-1 '></i>
            </button>
        </div>
    )
}

export default NextSlider
