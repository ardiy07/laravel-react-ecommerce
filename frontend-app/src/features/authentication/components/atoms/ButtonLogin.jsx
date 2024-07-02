import React from 'react'

function ButtonLogin(props) {
    return (
        <div className='border-green-600 border px-5 rounded-lg'>
            <button className='flex font-bold py-2 text-green-600 text-sm tracking-tight items-center justify-center' onClick={props.onClick}>
                {props.label}
            </button>
        </div>
    )
}

export default ButtonLogin
