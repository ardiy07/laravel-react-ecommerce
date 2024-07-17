import React from 'react'

function LoadingTrending() {
    return (
        <div className='border h-24 w-72 bg-white rounded-md shadow flex gap-4 items-center animate-pulse'>
            <div className='h-full w-24 bg-gray-200 border-r'></div>
            <div className='flex flex-col gap-3'>
                <div className='w-36 h-3 bg-green-300 rounded-full'></div>
                <div className='w-28 h-3 bg-red-200 rounded-full'></div>
            </div>
        </div>
    )
}

export default LoadingTrending