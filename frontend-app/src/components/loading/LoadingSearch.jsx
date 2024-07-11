import React from 'react'
import './index.css'

function LoadingSearch() {
    return (
        <div className="flex items-center justify-center h-full py-2">
            <div className="w-[2.5rem] h-[2.5rem]  rotate-[130deg] border-t-[2px] border-r-[2.3px] border-green-400 rounded-full animate-spine"></div>
            <div className="w-[2.5rem] h-[2.5rem] absolute animate-spin-reverse rotate-[-130deg] border-t-[2px] border-r-[2px] border-yellow-400 rounded-full"></div>
        </div>
    )
}

export default LoadingSearch
