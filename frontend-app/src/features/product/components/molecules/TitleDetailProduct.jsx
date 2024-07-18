import React from 'react'
import '../../../../assets/css/icons.css'

function TitleDetailProduct({icon, name}) {
    return (
        <div className='w-full'>
            <h3 className='text-xl font-semibold uppercase leading-tight tracking-tight'>
                <span className='pr-1'>
                    <i className={`${icon} px-3`}></i>
                </span>
                {name}
            </h3>
        </div>
    )
}

export default TitleDetailProduct
