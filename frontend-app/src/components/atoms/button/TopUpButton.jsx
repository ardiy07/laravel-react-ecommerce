import React from 'react'

function TopUpButton(props) {
  return (
    <button className={`px-6 py-2 mt-4 rounded-md font-bold tracking-tight text-sm ${props.isFormEmpty ? 'bg-gray-300 text-gray-400' : 'bg-green-500 text-white'}`} disabled={props.isFormEmpty}>
      {props.label}
    </button>
  )
}

export default TopUpButton