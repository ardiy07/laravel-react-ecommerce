import React, { Suspense } from 'react'
import MainTamplates from '../../templates/pages/MainTamplates'
import { Banner, TopUp, PenggunaBaru, Kupon, ProductHome } from '../components'
import '../../../assets/css/home.css'

function HomePage() {
  return (
    <MainTamplates>
      <Suspense fallback={<div>Loading.....</div>}>
        <Banner />
        <TopUp />
        <Kupon />
        <PenggunaBaru />
        <PenggunaBaru />
        <p className='border-4 bg-gray-100'></p>
        <ProductHome />
      </Suspense>
    </MainTamplates>
  )
}

export default HomePage