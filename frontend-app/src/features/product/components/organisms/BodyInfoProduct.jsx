import React from 'react'
import '../../../../assets/css/icons.css'

function BodyInfoProduct() {
    const data = [
        { stars: 5, percentage: '50%', number: 395 },
        { stars: 4, percentage: '60%', number: 400 },
        { stars: 3, percentage: '70%', number: 405 },
        { stars: 2, percentage: '80%', number: 410 },
        { stars: 1, percentage: '90%', number: 415 },
    ];

    return (
        <div className='mt-5 flex gap-2'>
            <div className='felx flex-col h-fit sticky top-36'>
                <div className='bg-white py-3 px-5 shadow border rounded-lg flex flex-col gap-2 justify-center'>
                    <h2 className='font-bold text-xl tracking-tight'>Ulasan Pembeli</h2>
                    <div className='flex flex-col gap-1'>
                        <div className='flex justify-center'>
                            <i className='stars-icon'></i>
                            <p className='font-semibold text-5xl'>4.8<span className='text-sm text-gray-500'>/5.0</span></p>
                        </div>
                        <div className='flex gap-1 text-sm justify-center text-gray-500'>
                            <p className='tracking-tight'>451 rating</p>
                            <span>.</span>
                            <p className='tracking-tight'>20 ulasan</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        {data.map((item, index) => (
                            <div className='flex justify-center items-center gap-2'>
                                <p className='flex items-center gap-[0.2rem] text-gray-500 font-medium'>
                                    <span className='flex'>
                                        <i className='stars-icon'></i>
                                    </span>
                                    {item.stars}
                                </p>
                                <div className="overflow-hidden h-2 w-40 text-xs flex rounded bg-gray-200">
                                    <div style={{ width: `${item.percentage}` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                                </div>
                                <p className='text-gray-500 text-base'>{item.number}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='felx flex-col h-[96rem] bg-white w-full py-3 px-4 shadow border rounded-lg'>
                info
            </div>
        </div>
    )
}

export default BodyInfoProduct