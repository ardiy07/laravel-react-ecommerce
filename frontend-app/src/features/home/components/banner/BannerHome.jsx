import React from 'react'
import Banner from '../../../../components/organisms/Banner/Banner'
import data from './DataBenner.json'

function BannerHome() {
  return (
    <Banner data={data} />
  )
}

export default BannerHome