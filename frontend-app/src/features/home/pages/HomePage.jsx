import React from 'react'
import MainTamplates from '../../templates/pages/MainTamplates'
import { Banner, TopUp } from '../components'
import PenggunaBaru from '../components/organisms/PenggunaBaru'

function HomePage() {
  return (
    <MainTamplates>
      <Banner />
      <TopUp />
      <PenggunaBaru />
      <PenggunaBaru />
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