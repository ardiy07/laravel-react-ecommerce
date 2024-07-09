import React from 'react'
import './index.css'

function LoadingPage() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center  z-50'>
        <div className='w-16 h-16 bg-green-500 rounded-full animate-loading-page-up'/>
        <div className='w-16 h-16 bg-yellow-400 rounded-full animate-loading-page-down'/>
    </div>
  )
}

export default LoadingPage
