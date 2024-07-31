import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ResultSearchAddress from '../molecules/ResultSearchAddress';
import SearchAddressEmpety from '../molecules/SearchAddressEmpety';
import LoadingAddressSearch from '../molecules/LoadingAddressSearch';
import InputSearch from '../../../templates/components/atoms/InputSearch';
import { resetSearch } from '../../services/slices/getSearchAddressSlice';
import { fetchSearchAddress } from '../../services/thunks/addressThunks';
import { APP_DEBUG } from '../../../../config/env';

function AddLokasi({ setSearch, setValue }) {
    const [search, setSearchState] = useState('');
    const [typingTimer, setTypingTimer] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const searchContainerRef = useRef(null);
    const dispatch = useDispatch();
    const [loadingSearch, setLoadingSearch] = useState(false);
    const typingTimeout = 500;
    const { data, status } = useSelector((state) => state.searchAddress);

    const handleSearch = (e) => {
        const newSearch = e.target.value;
        setSearchState(newSearch);

        if (typingTimer) {
            clearTimeout(typingTimer);
        }

        if (newSearch.length === 0) {
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

    const handleSetSearchClick = (item) => {
        const address = `${item.village}, ${item.regencie}, ${item.province}`;
        setSearch(address);
        setSearchState(address);
        setValue({
            districtID: item.districtID,
            village: item.village,
            district: item.district,
            regencie: item.regencie,
            province: item.province,
            code: item.code,
            lat: item.lat,
            long: item.long
        });
        setIsFocus(false);
    };

    if (APP_DEBUG) {
        console.log('search: ', search);
        console.log('Alamat Search: ', data);
    }

    return (
        <div className='flex flex-col'>
            <h3 className='font-bold text-xl tracking-tight'>Di mana lokasi tujuan pengirimanmu?</h3>
            <div className='w-full'>
                <div className='flex mx-5 pt-5 gap-7'>
                    <div className='w-full'>
                        <div className='relative' onClick={() => setIsFocus(true)}>
                            <InputSearch
                                value={search}
                                onChange={handleSearch}
                                placeholder="Pilih Kota atau Kecamatan"
                            />
                            <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
                                <span className='icon-search'></span>
                            </div>
                        </div>
                        <div ref={searchContainerRef} className={`w-full h-auto border-2 mt-1 rounded-md ${isFocus ? 'block' : 'hidden'}`}>
                            <div className='w-full border-b'>
                                <button className='py-3 px-4 text-gray-500 font-semibold'>Tidak Ketemu? Isi alamat secara manual</button>
                            </div>
                            {loadingSearch && (
                                <>
                                    {Array.from({ length: 3 }, (_, i) => (
                                        <LoadingAddressSearch key={i} />
                                    ))}
                                </>
                            )}
                            {search.length > 0 && data && data.length > 0 && (
                                <div className="w-full">
                                    <div className='overflow-y-scroll max-h-[14.2rem]'>
                                        {data.map((item, index) => (
                                            <ResultSearchAddress
                                                key={index}
                                                code={item.code}
                                                lat={item.lat}
                                                long={item.long}
                                                districtID={item.districtID}
                                                district={item.district}
                                                village={item.village}
                                                regencie={item.regencie}
                                                province={item.province}
                                                setSearch={() => handleSetSearchClick(item)}
                                                setValue={setValue}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                            {search.length >= 2 && status === 'success' && !data && (
                                <SearchAddressEmpety />
                            )}
                        </div>
                        <div className='pt-2 font-semibold text-gray-500'>
                            Mau cara lain? Isi alamat secara manual
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddLokasi;
