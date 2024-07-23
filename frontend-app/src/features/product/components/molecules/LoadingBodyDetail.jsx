import React from 'react'

function LoadingBodyDetail() {
    return (
        <div className='flex h-fit bg-white px-4 py-5 gap-5 shadow rounded-lg border'>
            <div className="pr-5">
                <div className='bg-gray-200 w-[23rem] h-72 rounded-md animate-pulse'></div>
            </div>
            <div className='w-full flex flex-col gap-4'>
                <div className='w-96 h-5 bg-gray-200 rounded-md animate-pulse'></div>
                <div className='w-96 h-9 bg-gray-200 rounded-md animate-pulse'></div>
                <div className='w-32 h-6 bg-gray-200 rounded-md animate-pulse'></div>
                <div className="grid grid-cols-4 gap-2">
                    <div className='w-20 h-8 bg-gray-200 rounded-md animate-pulse'></div>
                    <div className='w-20 h-8 bg-gray-200 rounded-md animate-pulse'></div>
                    <div className='w-20 h-8 bg-gray-200 rounded-md animate-pulse'></div>
                    <div className='w-20 h-8 bg-gray-200 rounded-md animate-pulse'></div>
                    <div className='w-20 h-8 bg-gray-200 rounded-md animate-pulse'></div>
                    <div className='w-20 h-8 bg-gray-200 rounded-md animate-pulse'></div>
                    <div className='w-20 h-8 bg-gray-200 rounded-md animate-pulse'></div>
                </div>
                <div className='w-96 h-9 bg-gray-200 rounded-md animate-pulse'></div>
            </div>
        </div>
    )
}

export default LoadingBodyDetail