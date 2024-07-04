import React from 'react'
import { Link } from 'react-router-dom'
import { getAssetImages } from '../../../../utils/pathUtils'

function BannerImage(props) {
    return (
        <Link to={props.to} className='w-full h-full'>
            <img src={getAssetImages(`banner/${props.image}`)} alt={props.title} className='w-full h-full' />
        </Link>
    )
}

export default BannerImage
