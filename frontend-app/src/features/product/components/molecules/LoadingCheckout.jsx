import React from 'react'

function LoadingCheckout() {
    return (
        <div className='border rounded-lg py-3 px-3 shadow bg-white flex flex-col gap-3 h-fit w-72'>
            <div className='bg-gray-200 w-56 h-5 rounded-md animate-pulse'></div>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-3 items-center'>
                    <div className='w-20 h-16 bg-gray-200 rounded-md animate-pulse'></div>
                    <div className='flex flex-col gap-2'>
                        <div className='w-32 h-3 bg-gray-200 rounded-md animate-pulse'></div>
                        <div className='w-24 h-3 bg-gray-200 rounded-md animate-pulse'></div>
                    </div>
                </div>
                <div className=' w-44 h-3 bg-gray-200 rounded-md animate-pulse'></div>
            </div>
            <div className='flex gap-3 items-center'>
                <div className='w-32 h-7 bg-gray-200 rounded-md animate-pulse'></div>
                <div className='w-20 h-4 bg-gray-200 rounded-md animate-pulse'></div>
            </div>
            <div className='w-32 h-3 bg-gray-200 rounded-md animate-pulse'></div>
            <div className="flex flex-col gap-1">
                <div className='flex items-end justify-end'>
                <div className='w-24 h-4 bg-gray-200 rounded-md animate-pulse mt-3'></div>
                </div>
                <div className='flex justify-between'>
                    <div className='w-24 h-4 bg-gray-200 rounded-md animate-pulse'></div>
                    <div className='w-28 h-4 bg-gray-200 rounded-md animate-pulse'></div>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
                <div className=' w-64 h-9 bg-gray-200 rounded-lg animate-pulse'></div>
                <div className='w-64 h-9 bg-gray-200 rounded-lg animate-pulse'></div>
            </div>
            <div className="flex gap-2 justify-center items-center">
                <div className='w-16 h-7 bg-gray-200 rounded-md animate-pulse'></div>
                <span className='w-[0.05rem] h-5 bg-gray-300'></span>
                <div className='w-16 h-7 bg-gray-200 rounded-md animate-pulse'></div>
            </div>
        </div>
    )
}

export default LoadingCheckout