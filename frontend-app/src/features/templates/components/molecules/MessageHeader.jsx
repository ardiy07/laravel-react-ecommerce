import React, { useState } from 'react'
import IconHeader from '../atoms/IconHeader'
import DataMessage from '../data/DataMessage.json'
import { Link } from 'react-router-dom';

function MessageHeader({onClose, onOpen}) {
    const [isOpen, setOpen] = useState(false);
    const marketOpen = () => {
        setOpen(true)
        onOpen()
    }

    const marketClose = () => {
        setOpen(false)
        onClose()
    }


    return (
        <div className='relative' onMouseEnter={marketOpen} onMouseLeave={marketClose}>
            <IconHeader isOpen={isOpen} icon='icon-message' count={0}/>
            {isOpen && (
                <div className='mt-1 py-2 px-3 absolute z-50 w-market bg-white shadow-2xl rounded-md right-0 -mx-24 border w-48'>
                    {DataMessage.map((data, index) => (
                        <div key={index} className='flex justify-between my-3 px-2 py-1 hover:bg-slate-100 cursor-pointer'>
                            <Link to={'/'} className='font-normal text-sm text-slate-700'>{data.title}</Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MessageHeader
