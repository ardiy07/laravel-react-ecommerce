import React from 'react'
import { Link } from 'react-router-dom'
import { getAssetImages } from '../../../../utils/pathUtils'

function CardTopUpButton(props) {
    return (
        <div className='w-auto'>
        <Link to={props.url} className='shadow mx-1 bg-white border rounded-xl flex items-center px-2 gap-1 py-1'>
            <img src={getAssetImages(`topup/${props.image}`)} className='w-7' />
            <span className='text-black font-normal tracking-tight text-base'>{props.name}</span>
        </Link>
        </div>
    )
}

export default CardTopUpButton
