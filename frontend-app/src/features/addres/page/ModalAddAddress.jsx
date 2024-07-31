// ModalAddAddress.jsx
import React, { useEffect, useState } from 'react';
import AddLokasi from '../components/organisms/AddLokasi';
import PinpointLokasi from '../components/organisms/PinpointLokasi';
import Back from '../../../components/icon/Back';
import AddDetail from '../components/organisms/AddDetail';
import { APP_DEBUG } from '../../../config/env';

function ModalAddAddress({ close }) {
    const [search, setSearch] = useState('');
    const [value, setValue] = useState({});
    const [position, setPosition] = useState({ lat: 0, long: 0 });
    const [currentStep, setCurrentStep] = useState(1);
    const [addressDetail, setAddressDetail] = useState({
        label: '',
        alamatLengkap: '',
        nomorTelepon: '',
        catatan: '',
        namaPenerima: '',
    });

    const [formAddAddress, setFormAddAddress] = useState({})

    useEffect(() => {
        if (Object.keys(value).length > 0) {
            setCurrentStep(2);
        } else {
            setCurrentStep(1);
        }
    }, [value]);

    const handleNextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePositionChange = (newPosition) => {
        setPosition(newPosition);
    };

    const handlePreviousStep = () => {
        setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
    };

    const handleSave = () => {
        setFormAddAddress({
            district_id: value.districtID,
        })
    };

    if(APP_DEBUG){
        console.log('Debug True');
        console.log('hasil value: ', value);
        console.log('hasil lokasi: ', search);
        console.log('position lokasi: ', position.lat === 0 ? value.lat : position[0]);
        console.log('address Detail: ', addressDetail);
        console.log('Form Add ddress Detail: ', formAddAddress);

    }

    return (
        <div className='fixed inset-0 bg-slate-700 bg-opacity-70 z-50 w-screen h-screen flex items-center justify-center'>
            <div className='bg-white border shadow w-[60rem] max-h-[35rem] rounded-xl pb-6 overflow-hidden'>
                <div className='sticky top-0 bg-white shadow overflow-hidden flex flex-col py-5'>
                    <div className='flex justify-between w-full px-5'>
                        {currentStep > 1 && (
                            <button onClick={handlePreviousStep} className='w-8 font-bold'>
                                <Back />
                            </button>
                        )}
                        <div className='tracking-tight leading-tight mx-5 text-center flex items-center w-full justify-center'>
                            <h3 className='font-bold text-gray-800 text-xl'>Tambah Alamat</h3>
                        </div>
                        <button onClick={close} className='p-2'>
                            <svg
                                className="unf-icon"
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                                fill="var(--color-icon-enabled, #2E3137)"
                                style={{ display: 'inline-block', verticalAlign: 'middle' }}
                            >
                                <path d="m13.06 12 7.47-7.47a.75.75 0 1 0-1.06-1.06L12 10.94 4.53 3.47a.75.75 0 1 0-1.06 1.06L10.94 12l-7.47 7.47a.75.75 0 0 0 1.06 1.06L12 13.06l7.47 7.47a.75.75 0 0 0 1.06-1.06L13.06 12Z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className='mt-2 px-14'>
                        <ul className='flex gap-16 relative'>
                            <li className={`w-full flex flex-col items-center justify-center ${currentStep >= 1 ? 'text-green-700' : 'text-gray-700'}`}>
                                <div className={`rounded-full border-2 ${currentStep >= 1 ? 'border-green-500 bg-green-500' : 'border-gray-500'} w-7 h-7 flex justify-center items-center`}>
                                    <p className={`text-sm font-bold ${currentStep >= 1 ? 'text-white' : 'text-gray-500'}`}>1</p>
                                </div>
                                <p className='text-sm font-semibold mt-1 tracking-tight'>Cari lokasi pengirimanmu</p>
                            </li>
                            <span className='absolute left-[9.5rem] top-3 w-[14.5rem] h-[0.05rem] bg-gray-700'></span>
                            <li className={`w-full flex flex-col items-center justify-center ${currentStep >= 2 ? 'text-green-700' : 'text-gray-700'}`}>
                                <div className={`rounded-full border-2 ${currentStep >= 2 ? 'border-green-500 bg-green-500' : 'border-gray-500'} w-7 h-7 flex justify-center items-center`}>
                                    <p className={`text-sm font-bold ${currentStep >= 2 ? 'text-white' : 'text-gray-500'}`}>2</p>
                                </div>
                                <p className='text-sm font-semibold mt-1 tracking-tight'>Tentukan pinpoint lokasi</p>
                            </li>
                            <span className='absolute right-[9.5rem] top-3 w-[14.5rem] h-[0.05rem] bg-gray-700'></span>
                            <li className={`w-full flex flex-col items-center justify-center ${currentStep >= 3 ? 'text-green-700' : 'text-gray-700'}`}>
                                <div className={`rounded-full border-2 ${currentStep >= 3 ? 'border-green-500 bg-green-500' : 'border-gray-500'} w-7 h-7 flex justify-center items-center`}>
                                    <p className={`text-sm font-bold ${currentStep >= 3 ? 'text-white' : 'text-gray-500'}`}>3</p>
                                </div>
                                <p className='text-sm font-semibold mt-1 tracking-tight'>Lengkapi detail alamat</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='max-h-[25rem] px-5 py-3 overflow-y-scroll pb-2'>
                    {currentStep === 1 && (
                        <AddLokasi setSearch={setSearch} setValue={setValue} />
                    )}
                    {currentStep === 2 && (
                        <>
                            <PinpointLokasi
                                lat={value.lat}
                                long={value.long}
                                village={value.village}
                                district={value.district}
                                regencie={value.regencie}
                                province={value.province}
                                onPositionChange={handlePositionChange}
                            />
                            <div className='mt-5 text-end border-t pt-4'>
                                <button onClick={handleNextStep} className='bg-green-500 text-white tracking-tight py-2 px-4 rounded-md font-semibold hover:bg-green-600'>
                                    Pilih Pinpoint
                                </button>
                            </div>
                        </>
                    )}
                    {currentStep === 3 && (
                        <>
                            <AddDetail formDetail={addressDetail} setFormDetail={setAddressDetail} />
                            <div className='mt-5 flex border-t w-full pt-4'>
                                <button onClick={handleSave} className='bg-green-500 w-full text-white py-2 tracking-tight px-4 rounded-md font-semibold hover:bg-green-600'>
                                    Simpan
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ModalAddAddress;