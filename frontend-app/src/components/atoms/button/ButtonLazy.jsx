import React from 'react'

function ButtonLazy() {
  return (
    <div className={`w-52 h-10 bg-gray-200 rounded-lg animate-pulse`}>
      <div className="w-full bg-gray-300 rounded-md"></div>
    </div>
  )
}

export default ButtonLazy