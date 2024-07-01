import React from 'react'

function CardNavbarProduct(props) {
    return (
        <div className={`${props.background} h-16 px-3 pt-2 rounded-lg w-fit cursor-pointer`} onClick={props.onClick}>
            <div className='relative gap-0 w-48 overflow-hidden'>
                <span className={`w-12 h-[0.2rem] bg-white rounded-lg absolute transform duration-500  ${props.active ? 'translate-x-0' : '-translate-x-full'}`}></span>
                <p className=' font-bold text-white text-base '>
                    {props.title}
                </p>

            </div>
        </div>
    )
}

export default CardNavbarProduct