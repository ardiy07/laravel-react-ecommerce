import React from 'react'
import LinkHeader from '../atoms/LinkHeader'

function TopHeader() {
  return (
    <div className='bg-gray-100 py-1 hidden lg:block px-10'>
      <div className='flex justify-between items-center text-sm container mx-auto font-normal'>
        <div className='flex font-normal text-sm gap-2 items-center'>
          <span className='flex items-center justify-center'>
            <i className='icon-phone'></i>
          </span>
          <LinkHeader to="#">Download Tokopedia App</LinkHeader>
        </div>
        <div className='grid grid-flow-col gap-8'>
          <LinkHeader to="#">Tentang Tokopedia</LinkHeader>
          <LinkHeader to="#">Mitra Tokopedia</LinkHeader>
          <LinkHeader to="#">Pusat Edukasi Seller</LinkHeader>
          <LinkHeader to="#">Promo</LinkHeader>
          <LinkHeader to="#">Tokopedia Care</LinkHeader>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
