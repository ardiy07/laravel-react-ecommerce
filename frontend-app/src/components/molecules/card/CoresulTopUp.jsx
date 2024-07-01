import React from 'react'

function CoresulTopUp(props) {
    return (
        <a href={props.url} className='shadow mx-1 bg-white border min-w-max max-w-min rounded-xl flex items-center px-2 gap-1 py-1'>
            <img src={props.image} className='w-7' />
            <span className='text-black font-normal tracking-tight text-base'>{props.name}</span>
        </a>
    )
}

export default CoresulTopUp