import React from 'react'
import './index.css'

function LoadinButtonWhite() {
    return (
        <div className="flex items-center justify-center">
            <div className='flex'>
                <div className="w-[1.8rem] h-[1.8rem] rotate-[130deg] border-t-[1.9px] border-r-2 border-slate-300 rounded-full animate-spin-reverse"></div>
                <div className="w-[1.8rem] h-[1.8rem] rotate-[-130deg] absolute border-t-[1.9px] border-r-[1.9px] animate-spine  border-slate-300 rounded-full"></div>
            </div>
        </div>
    )
}

export default LoadinButtonWhite
