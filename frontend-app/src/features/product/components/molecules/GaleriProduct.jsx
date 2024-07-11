import React from 'react'

function GaleriProduct({image}) {
  return (
    <div className='w-full'>
        <img src={image} className='w-[25rem] shadow-sm border rounded-lg' />
    </div>
  )
}

export default GaleriProduct
