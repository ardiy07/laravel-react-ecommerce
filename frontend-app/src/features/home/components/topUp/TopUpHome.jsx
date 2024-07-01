import React from 'react'
import KategoriPilihan from '../../../../components/organisms/KategoriPilihan/KategoriPilihan'
import TopUp from '../../../../components/organisms/TopUp/TopUp'
import TopUpBotton from '../../../../components/organisms/TopUpBotton/TopUpBotton'

function TopUpHome() {
  return (
    <div className='mt-8 shadow-md border rounded-lg mb-9 mx-16'>
      <div className='px-4 py-3 grid grid-cols-2 gap-3'>
        <KategoriPilihan />
        <TopUp />
        <TopUpBotton />
      </div>
    </div>
  )
}

export default TopUpHome