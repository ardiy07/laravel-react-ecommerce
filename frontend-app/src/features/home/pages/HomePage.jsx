import React, { Suspense } from 'react'
import MainTamplates from '../../templates/pages/MainTamplates'
import { Banner, TopUp, PenggunaBaru, Kupon, ProductHome, TrendingHome } from '../components'
import '../../../assets/css/home.css'
import LoadingCard from '../../../components/loading/LoadingCard'

function HomePage() {
  return (
    <MainTamplates>
      <Suspense fallback={<div>Loading.....</div>}>
        <Banner />
        <TopUp />
        <Kupon />
        <PenggunaBaru />
        <TrendingHome />
        <PenggunaBaru />
        <p className='border-4 bg-gray-100'></p>
        <ProductHome />
      </Suspense>
    </MainTamplates>
  )
}

export default HomePage