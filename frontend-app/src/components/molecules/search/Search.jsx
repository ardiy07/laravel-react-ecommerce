import React, { Suspense, useState, useEffect } from 'react';
import { InputSearch, LinkSearch, LinkStorePopuler } from '../../atoms';
import DataPopuler from '../../../components/molecules/search/DataPopuler';
import { getAssetIcons } from '../../../utils/pathUtils';
import ButtonLazy from '../../atoms/button/ButtonLazy';
import { useDispatch, useSelector } from 'react-redux';
import { fecthSearchProduct } from '../../../features/home/services/productHomeThunks'; // Perbaikan typo 'fecth' menjadi 'fetch'

function Search({ onOpen, onClose }) {
    const [search, setSearch] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const [typingTimer, setTypingTimer] = useState(null);
    const [loadingSearch, setLoadingSearch] = useState(false);

    const dispatch = useDispatch();
    const typingTimeout = 500;

    const { dataSearch, statusSearch } = useSelector((state) => state.productHome);

    const onSearch = () => {
        setIsFocus(true);
        onOpen();
    };

    const onSearchClose = () => {
        setIsFocus(false);
        onClose();
    };

    const handleSearch = (e) => {
        const newSearch = e.target.value;
        setSearch(newSearch);

        if (typingTimer) {
            clearTimeout(typingTimer);
        }

        if (newSearch.length > 1) {
            const timer = setTimeout(() => {
                setLoadingSearch(true);
                dispatch(fecthSearchProduct(newSearch)).finally(() => {
                    setLoadingSearch(false);
                });
            }, typingTimeout);

            setTypingTimer(timer);
        } else {
            setLoadingSearch(true);
            dispatch(fecthSearchProduct(newSearch)).finally(() => {
                setLoadingSearch(false);
            });
        }
    };

    useEffect(() => {
        return () => {
            if (typingTimer) {
                clearTimeout(typingTimer);
            }
        };
    }, [typingTimer]);

    console.log(dataSearch, statusSearch, search);

    return (
        <div className='relative'>
            <Suspense fallback={<ButtonLazy />}>
                <InputSearch
                    value={search}
                    onChange={handleSearch}
                    onFocus={onSearch}
                    onBlur={onSearchClose}
                    placeholder="Cari di Tokopedia"
                />
            </Suspense>
            <div className='absolute inset-y-0 left-0 flex items-center pl-2'>
                <img src={getAssetIcons('search.svg')} alt="search icon" />
            </div>

            {/* Result */}
            <div className={`absolute px-4 h-auto z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-md w-full ${isFocus ? 'block' : 'hidden'}`}>
                {search === '' ? (
                    <div className='rounded-md px-1 my-4'>
                        <h1 className='font-bold text-lg'>Paling Populer</h1>
                        <div className='grid grid-cols-2 gap-3 my-2'>
                            {DataPopuler.map((dataItem, index) => (
                                <LinkStorePopuler href="#" key={index} judul={dataItem.judul} title={dataItem.title} />
                            ))}
                        </div>
                    </div>
                ) : (
                    // Result Search
                    <div className="h-auto py-3 overflow-y-auto">
                        {loadingSearch ? (
                            <span className='min-h-28 my-48'>Loading...</span>
                        ) : (
                            <>
                                {dataSearch.products.length === 0 && dataSearch.shops.length === 0 ? (
                                    <span className='min-h-28 my-48'>Data Tidak Ada</span>
                                ) : (
                                    <>
                                        {dataSearch.products.length > 0 && (
                                            <div className="mb-2">
                                                {dataSearch.products.map((product, index) => (
                                                    <LinkSearch href='#' key={index} name={product.name} search={search} />
                                                ))}
                                            </div>
                                        )}
                                        {dataSearch.shops.length > 0 && (
                                            <div>
                                                <h1 className='font-bold text-lg'>Toko</h1>
                                                {dataSearch.shops.map((shop, index) => (
                                                    <LinkSearch href='#' key={index} name={shop.name} search={search} />
                                                ))}
                                            </div>
                                        )}
                                    </>
                                )}
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;
