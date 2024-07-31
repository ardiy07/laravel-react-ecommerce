import React, { useEffect, useRef, useState } from 'react'
import AddCircle from '../../../components/icon/AddCircle'
import InputSearch from '../../templates/components/atoms/InputSearch'
import { APP_DEBUG } from '../../../config/env'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchAddress } from '../services/thunks/addressThunks';
import { resetSearch } from '../services/slices/getSearchAddressSlice';
import LoadingAddressSearch from '../components/molecules/LoadingAddressSearch';
import SearchAddressEmpety from '../components/molecules/SearchAddressEmpety';
import ResultSearchAddress from '../components/molecules/ResultSearchAddress';

function ModalDetailAddres({ close, addAddress }) {
    const [search, setSearch] = useState('');
    const [typingTimer, setTypingTimer] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const searchContainerRef = useRef(null);
    const dispatch = useDispatch();
    const [loadingSearch, setLoadingSearch] = useState(false);
    const typingTimeout = 500;
    const { data, status } = useSelector((state) => state.searchAddress)


    const handleSearch = (e) => {
        const newSearch = e.target.value;
        setSearch(newSearch);

        if (typingTimer) {
            clearTimeout(typingTimer);
        }

        if (newSearch.length == 0) {
            dispatch(resetSearch());
        }

        if (newSearch.length >= 1) {
            const timer = setTimeout(() => {
                setLoadingSearch(true);
                dispatch(fetchSearchAddress(newSearch)).finally(() => {
                    setLoadingSearch(false);
                });
            }, typingTimeout);

            setTypingTimer(timer);
        } else {
            setLoadingSearch(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
                setIsFocus(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            if (typingTimer) {
                clearTimeout(typingTimer);
            }
        };
    }, [typingTimer]);


    if (APP_DEBUG) {
        console.log('search: ', search);
        console.log('Alamat Search: ', data);
    }

    return (
        <>
            <div className='fixed inset-0 bg-slate-700 bg-opacity-70 z-50 w-screen h-screen flex items-center justify-center'>
                <div className='bg-white border shadow w-[60rem] max-h-[35rem] rounded-xl pb-6 overflow-y-scroll'>
                    <div className='flex justify-between w-full mb-1 px-5 sticky top-0 bg-white shadow py-5'>
                        <div className='tracking-tight leading-tight mx-5'>
                            <h3 className='font-bold text-gray-800 text-xl'>Mau kirim belanjaan kemana?</h3>
                            <p className='font-semibold text-gray-600'>Biar pengalaman belanjamu lebih baik, pilih alamat dulu.</p>
                        </div>
                        <button onClick={close}>
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
                    <div className='flex flex-col gap-5 mt-7'>
                        <div className='bg-white border rounded-md mx-5'>
                            <button className='w-full flex flex-col items-center justify-center py-3 leading-tight tracking-tight' onClick={addAddress}>
                                <div className='w-6'>
                                    <AddCircle />
                                </div>
                                <div className='font-bold text-gray-800 mt-3'>
                                    Tambah Alamat Pengirimanmu
                                </div>
                                <div>
                                    Kamu belum memiliki alamat
                                </div>
                            </button>
                        </div>
                        <div className='w-full border-t'>
                            <div className='flex mx-5 pt-5 gap-7'>
                                <div className='w-full'>
                                    <div className='relative' onClick={() => setIsFocus(true)}>
                                        <InputSearch
                                            value={search}
                                            onChange={handleSearch}
                                            placeholder="Pilih Kota atau Kecamatan"
                                        />
                                        <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
                                            <span className='icon-search'>
                                            </span>
                                        </div>
                                    </div>
                                    <div ref={searchContainerRef} className={`w-full h-auto border-2 mt-1 rounded-md ${isFocus ? 'block' : 'hidden'}`}>
                                        <div className='w-full border-b'>
                                            <button className='py-3 px-4 text-gray-500 font-semibold'>Tidak Ketemu? Isi alamat secara manual</button>
                                        </div>
                                        {loadingSearch && (
                                            <>
                                                {Array.from({ length: 3 }, (_, i) => (
                                                    <LoadingAddressSearch />
                                                ))}
                                            </>
                                        )}
                                        <>
                                            {search.length > 0 && data && data.length > 0 && (
                                                <div className="w-full">
                                                    <div className='overflow-y-scroll max-h-[14.2rem]'>
                                                        {data.map((item, index) => (
                                                            <ResultSearchAddress key={index} village={item.village} regencie={item.regencie} province={item.province} />
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                            {search.length >= 2 && status == 'success' && !data && (
                                                <SearchAddressEmpety />
                                            )}

                                        </>
                                    </div>
                                    <div className='pt-2 font-semibold text-gray-500'>
                                        Mau cara lain? Isi alamat secara manual
                                    </div>
                                </div>
                                <div className=''>
                                    <button className={`text-white font-bold rounded-md px-14 py-2 ${search.length > 0 ? 'bg-green-500' : 'bg-gray-400'}`} disabled={!search}>Gunakan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ModalDetailAddres