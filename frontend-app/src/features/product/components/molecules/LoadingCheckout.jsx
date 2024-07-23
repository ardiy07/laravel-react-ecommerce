import React from 'react'

function LoadingCheckout() {
    return (
        <div className='border rounded-lg py-3 px-3 shadow bg-white flex flex-col gap-3 h-fit'>
            <div className='bg-gray-200 w-72 h-5 rounded-md animate-pulse'></div>
            <div className='flex gap-3 items-center'>
                <div className='w-20 h-16 bg-gray-200 rounded-md animate-pulse'></div>
                <div className='flex flex-col gap-2'>
                    <div className='w-32 h-3 bg-gray-200 rounded-md animate-pulse'></div>
                    <div className='w-24 h-3 bg-gray-200 rounded-md animate-pulse'></div>
                </div>
            </div>
            <div className='flex gap-3 items-center'>
                <div className='w-32 h-7 bg-gray-200 rounded-md animate-pulse'></div>
                <div className='w-20 h-4 bg-gray-200 rounded-md animate-pulse'></div>
            </div>
            <div className='w-32 h-3 bg-gray-200 rounded-md animate-pulse'></div>
            <div className="flex justify-between mt-3">
                <div className='w-24 h-4 bg-gray-200 rounded-md animate-pulse'></div>
                <div className='w-24 h-4 bg-gray-200 rounded-md animate-pulse'></div>
            </div>
            <div className="flex flex-col gap-2 items-center mt-3">
                <div className='w-72 h-10 bg-gray-200 rounded-md animate-pulse'></div>
                <div className='w-72 h-10 bg-gray-200 rounded-md animate-pulse'></div>
            </div>
            <div className="flex gap-2 justify-center items-center mt-3">
                <div className='w-16 h-7 bg-gray-200 rounded-md animate-pulse'></div>
                <span className='w-[0.05rem] h-5 bg-gray-300'></span>
                <div className='w-16 h-7 bg-gray-200 rounded-md animate-pulse'></div>
            </div>
        </div>
    )
}

export default LoadingCheckout