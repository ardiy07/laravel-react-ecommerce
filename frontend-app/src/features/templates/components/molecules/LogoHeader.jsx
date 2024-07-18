import React from 'react'
import LinkHeader from '../atoms/LinkHeader'
import { getAssetImages } from '../../../../utils/pathUtils'

function LogoHeader(props) {
    return (
        <div className="hidden md:block mr-5">
            <LinkHeader to={props.to}>
                <img src={getAssetImages('default/e5b8438b.svg')} alt="Logo" className=' w-38' />
            </LinkHeader>
        </div>
    )
}

export default LogoHeader
