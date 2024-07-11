import React from 'react'

function CardNavbar({ title, background, active, onClick }) {
    return (
        <button className={`${background} py-8 px-3 pt-2 rounded-lg`} onClick={onClick}>
            <div className='relative gap-0 w-48 overflow-hidden flex justify-start'>
                <span className={`w-12 h-[0.2rem] bg-white rounded-lg absolute transform duration-500  ${active ? 'translate-x-0' : '-translate-x-full'}`}></span>
                <p className=' font-bold text-white text-base capitalize'>
                    {title}
                </p>
            </div>
        </button>
    )
}

export default CardNavbar
