import React from 'react'
import MainTamplate from '../../../components/templates/MainTamplate'
import BannerHome from '../components/banner/BannerHome'
import TopUpHome from '../components/topUp/TopUpHome'
import KuponHome from '../components/kupon/KuponHome'
import PenggunaBaruHome from '../components/penggunaBaru/PenggunaBaruHome'
import DiskonHome from '../components/diskon/DiskonHome'
import TrendingHome from '../components/trending/TrendingHome'
import NavbarProductHome from '../components/navbarProduct/NavbarProductHome'

function HomePage() {
  return (
    <MainTamplate>
        <BannerHome />
        <TopUpHome />
        <KuponHome />
        <PenggunaBaruHome />
        <TrendingHome />
        <DiskonHome />
        <p className='border-4 bg-gray-100'></p>
        <NavbarProductHome />
    </MainTamplate>
  )
}

export default HomePage