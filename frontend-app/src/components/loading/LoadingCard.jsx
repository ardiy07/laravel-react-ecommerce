import React from 'react'

function LoadingCard() {
    return (
        <div className="max-w-sm w-fit h-[19rem] mx-auto border rounded-lg my-4 bg-white">
            <div className="flex flex-col gap-3 animate-pulse">
                <div className='bg-gray-200 w-[11.8rem] h-44'></div>
                <div className='bg-green-300 mx-2 rounded-full w-40 h-3 mt-4'></div>
                <div className='bg-red-300 mx-2 rounded-full w-32 h-3'></div>
                <div className='bg-gray-200 mx-2 rounded-full w-40 h-3'></div>
            </div>
        </div>

    )
}

export default LoadingCard
