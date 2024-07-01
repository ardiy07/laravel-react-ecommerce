import React from 'react'

function CardKategoriPilihan(props) {
  return (
    <div className='w-full h-full relative top-0 left-0 px-2'>
      <a href={props.url} className='flex border rounded-lg justify-center items-center py-1'>
        <img src={props.image} alt={props.title} className='w-30 h-30' />
      </a>
    </div>
  )
}

export default CardKategoriPilihan