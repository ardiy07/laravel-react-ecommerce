import React from 'react'

function LoadingUlasan() {
    return (
        <div className='flex flex-col gap-2 border-b pb-3 px-5 animate-pulse'>
            <div className='flex w-32 bg-gray-200 h-4 rounded-md'></div>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-1'>
                    <div className='w-10 h-10 bg-gray-200 rounded-full'></div>
                    <div className='w-24 h-4 bg-gray-200 rounded-md'></div>
                </div>
                <div className='w-24 h-3 bg-gray-200 rounded-md'></div>
            </div>
            <div className='h-4 bg-gray-200 rounded-md'></div>
            <div className='h-4 w-96 bg-gray-200 rounded-md'></div>
        </div>
    )
}

export default LoadingUlasan