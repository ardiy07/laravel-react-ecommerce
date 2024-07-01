import React, { useState } from 'react'
import Links from '../../atoms/Links'
import FormPulsa from '../../molecules/form/FormPulsa';
import FormPaketData from '../../molecules/form/FormPaketData';
import FormListrik from '../../molecules/form/FormListrik';

function TopUp() {
  const [currentPage, setCurrentPage] = useState("Pulsa");

  const handleClick = (page) => {
    setCurrentPage(page);
  };


  return (
    <div className='px-2'>
      <div className='pb-3'>
        <h3 className='text-xl font-bold'>Top Up & Tagihan</h3>
      </div>
      <div className='border rounded-lg'>
        <div className='text-center cursor-pointer'>
          <ul className='grid grid-flow-col w-full text-gray-500'>
            <Links.Page onClick={() => handleClick("Pulsa")} currentPage={currentPage} title="Pulsa" />
            <Links.Page onClick={() => handleClick("Paket Data")} currentPage={currentPage} title="Paket Data" />
            <Links.Page onClick={() => handleClick("Flight")} currentPage={currentPage} title="Flight" />
            <Links.Page onClick={() => handleClick("Listrik PLN")} currentPage={currentPage} title="Listrik PLN" />
          </ul>
        </div>
        <div className='py-4 px-3'>
          {currentPage === "Pulsa" && <FormPulsa />}
          {currentPage === "Paket Data" && <FormPaketData />}
          {currentPage === "Flight" && <a href="/">Flight</a>}
          {currentPage === "Listrik PLN" && <FormListrik />}
        </div>
      </div>
    </div>
  )
}

export default TopUp