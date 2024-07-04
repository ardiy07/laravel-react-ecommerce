import React from 'react'
import { getAssetImages } from '../../../../utils/pathUtils'
import { Link } from 'react-router-dom'

function CardKategori({to, image, alt}) {
    return (
        <div className='w-full h-full relative top-0 left-0 px-2'>
            <Link to={to} className='flex border rounded-lg justify-center items-center py-1'>
                <img src={getAssetImages(`topup/${image}`)} alt={alt} className='w-30 h-30' />
            </Link>
        </div>
    )
}

export default CardKategori
