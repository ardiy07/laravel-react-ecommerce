import React from 'react'

function LoadingAddressSearch() {
    return (
        <div className='flex py-2 px-4 border-b leading-tight tracking-tight gap-2'>
            <div className='w-6 h-6 bg-gray-300 rounded-full animate-pulse'></div>
            <div className='flex flex-col gap-2 animate-pulse'>
                <div className='w-44 h-3 bg-gray-300 rounded-lg'></div>
                <div className='w-96 h-3 bg-gray-300 rounded-lg'></div>
            </div>
        </div>
    )
}

export default LoadingAddressSearch