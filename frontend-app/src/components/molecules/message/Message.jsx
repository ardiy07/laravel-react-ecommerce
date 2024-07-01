import React, { useState } from 'react'
import DataMessage from './DataMessage.json'
import './index.css'

function Message({ onOpen, onClose }) {
    const [isOpen, setIsOpen] = useState(false)

    const marketOpen = () => {
        setIsOpen(true)
        onOpen()
    }

    const marketClose = () => {
        setIsOpen(false)
        onClose()
    }
    const count = 2

    return (
        <div className='relative' onMouseEnter={marketOpen} onMouseLeave={marketClose}>
            <span className={`body-icon-message hover:bg-gray-100 rounded-md ${isOpen ? 'bg-gray-100' : ''}`}>
                <i className='icon-message'></i>
                {count > 0 && <span className='absolute top-0 right-0 w-4 h-4 rounded-full bg-red-500 text-xs text-white flex justify-center items-center'>{count}</span>}
            </span>
            {isOpen && (
                <div className='mt-1 py-2 px-3 absolute z-50 w-market bg-white shadow-2xl rounded-md right-0 -mx-24 border w-48'>
                    {DataMessage.map((data, index) => (
                        <div key={index} className='flex justify-between my-3 px-2 py-1 hover:bg-slate-100 cursor-pointer'>
                            <a className='font-normal text-sm text-slate-700'>{data.title}</a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Message
