import React from 'react'
import { Link } from 'react-router-dom'
import { getAssetImageApi } from '../../../../utils/pathUtils'

function ReviewDetail({stars, created, name, comment, image}) {
    return (
        <>
            <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-1 border-b pb-3 px-5'>
                    <div className='flex gap-2 items-center tracking-tight'>
                        <div className='flex gap-1'>
                            {Array.from({ length: stars }).map((_, index) => (
                                <i key={index} className='stars-icon'></i>
                            ))}
                        </div>
                        <div className='font-semibold text-sm'>
                            <p className='text-gray-500'>{created}</p>
                        </div>
                    </div>
                    <div className='flex flex-col tracking-tight'>
                        <div className='flex items-center gap-2'>
                            <img src={getAssetImageApi(image)} className='w-10 rounded-full' />
                            <p className='font-bold text-sm capitalize'>{name}</p>
                        </div>
                        <div className='mt-1 tracking-tight'>
                            <p className='text-[0.8rem] font-medium text-gray-500'>Variant: Hello</p>
                        </div>
                    </div>
                    <div className='text-justify tracking-tight eading-tight'>
                        <p className='text-base '>{comment}</p>
                    </div>
                </div>
            </div>
            {/* <div className='text-end pb-2'>
                <Link to="./" className='font-bold text-green-500 tracking-tight' >
                    Lihat Semuanya
                </Link>
            </div> */}
        </>

    )
}

export default ReviewDetail