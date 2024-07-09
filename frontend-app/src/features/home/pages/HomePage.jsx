import React, { Suspense } from 'react'
import MainTamplates from '../../templates/pages/MainTamplates'
import { Banner, TopUp, PenggunaBaru, Kupon } from '../components'

function HomePage() {
  return (
    <MainTamplates>
      <Suspense fallback={<div>Loading.....</div>}>
        <Banner />
        <TopUp />
        <Kupon />
        <PenggunaBaru />
        <PenggunaBaru />
      </Suspense>
      {/* <BannerHome />
        <TopUpHome />
        <KuponHome />
        <PenggunaBaruHome />
        <TrendingHome />
        <DiskonHome />
        <p className='border-4 bg-gray-100'></p>
        <NavbarProductHome /> */}
    </MainTamplates>
  )
}

export default HomePage