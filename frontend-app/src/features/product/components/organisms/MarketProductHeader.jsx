import React, { useEffect, useState } from 'react'
import IconHeader from '../../../templates/components/atoms/IconHeader'
import MarketHeader from '../molecules/MarketHeader'
import MarketEmpetyHeader from '../molecules/MarketEmpetyHeader'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGetCard } from '../../services'
import { APP_DEBUG } from '../../../../config/env'

function MarketProductHeader({ onOpen, onClose, auth }) {
  const dispatch = useDispatch()
  const { data, count, error } = useSelector((state) => state.cardGet)
  const [isOpen, setIsOpen] = useState(false)
  const statusAddCard = useSelector((state) => state.addCard.status)

  const marketOpen = () => {
    setIsOpen(true)
    onOpen()
  }

  const marketClose = () => {
    setIsOpen(false)
    onClose()
  }

  useEffect(() => {
    if(auth){
      dispatch(fetchGetCard())
    }
  }, [dispatch, auth])

  if(APP_DEBUG){
    console.log('Data Card: ', data)
    console.log('Count Card: ', count)
    console.log('Error Card: ', error)
  }


  return (
    <div className='relative' onMouseEnter={marketOpen} onMouseLeave={marketClose}>
      <IconHeader icon='icon-market' count={count} isOpen={isOpen} auth={auth}/>
      {isOpen && (
        <div className='mt-1 py-2 absolute z-50 w-[30rem] bg-white shadow-2xl rounded-lg right-0 -mx-52 border'>
          {auth ?
            (<MarketHeader dataCards={data} count={count} auth={auth}/>) : (<MarketEmpetyHeader />)
          }
        </div>
      )}
    </div>
  )
}

export default MarketProductHeader
