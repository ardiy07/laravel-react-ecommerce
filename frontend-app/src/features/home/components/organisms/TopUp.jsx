import React, { Suspense, useState } from 'react'
import SlideKategori from '../molecules/SlideKategori'
import { LinkPage, LoadingLazzy } from '../../../../components'
import FormPulsa from '../molecules/FormPulsa';
import FormPaketData from '../molecules/FormPaketData';
import FormListrik from '../molecules/FormListrik';
import { useNavigate } from 'react-router-dom';
import SliderTopUpButton from '../molecules/SliderTopUpButton';

function TopUp() {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState("Pulsa");

    const handleClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='mt-8 shadow-sm border rounded-lg mb-9 mx-16'>
            <div className='px-4 py-3 grid grid-cols-2 gap-3'>
                <div className='flex flex-col gap-5'>
                    <h2 className='text-xl font-bold'>Kategori Pilihan</h2>
                    <SlideKategori />
                </div>
                <div className='flex flex-col gap-5'>
                    <h2 className='text-xl font-bold'>Top Up & Tagihan</h2>
                    <div className='border rounded-lg'>
                        <div className='text-center cursor-pointer'>
                            <ul className='grid grid-flow-col w-full'>
                                <LinkPage onClick={() => handleClick("Pulsa")} currentPage={currentPage} title="Pulsa" />
                                <LinkPage onClick={() => handleClick("Paket Data")} currentPage={currentPage} title="Paket Data" />
                                <LinkPage onClick={() => navigate('/flight')} title="Flight" />
                                <LinkPage onClick={() => handleClick("Listrik PLN")} currentPage={currentPage} title="Listrik PLN" />
                            </ul>
                        </div>
                        <div className='py-4 px-3'>
                            {currentPage === "Pulsa" &&
                                <Suspense fallback={<LoadingLazzy />}>
                                    <FormPulsa />
                                </Suspense>
                            }
                            {currentPage === "Paket Data" &&
                                <Suspense fallback={<LoadingLazzy />}>
                                    <FormPaketData />
                                </Suspense>
                            }
                            {currentPage === "Flight" && <a href="/">Flight</a>}
                            {currentPage === "Listrik PLN" &&
                                <Suspense fallback={<LoadingLazzy />}>
                                    <FormListrik />
                                </Suspense>
                            }
                        </div>
                    </div>
                </div>
                <SliderTopUpButton />
            </div>
        </div>
    )
}

export default TopUp
