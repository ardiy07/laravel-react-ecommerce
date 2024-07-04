import React from 'react'

function LoadingLazzy() {
    return (
        <div className={`w-auto h-8 flex items-center bg-gray-200 rounded-lg animate-pulse`}>
            <div className="w-full bg-gray-300 rounded-md"></div>
        </div>
    )
}

export default LoadingLazzy
