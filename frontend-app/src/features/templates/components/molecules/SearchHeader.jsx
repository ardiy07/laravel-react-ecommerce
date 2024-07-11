import React, { useState, useEffect } from 'react';
import  InputSearch  from '../atoms/InputSearch';
import { getAssetIcons } from '../../../../utils/pathUtils';
import { useDispatch, useSelector } from 'react-redux';
import LinkStoreSearch from '../atoms/LinkStoreSearch';
import DataPopuler from '../data/SearchPopuler.json';
import LinkResultSearch from '../atoms/LinkResultSearch';
import {fetchSearch} from '../../services/thunks/headerThunks';
import LoadingSearch from '../../../../components/loading/LoadingSearch';

function SearchHeader({ onOpen, onClose }) {
  const [search, setSearch] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [typingTimer, setTypingTimer] = useState(null);
  const [loadingSearch, setLoadingSearch] = useState(false);

  const dispatch = useDispatch();
  const typingTimeout = 500;

  const { dataSearch } = useSelector((state) => state.search);

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
    setLoadingSearch(true);

    if (typingTimer) {
      clearTimeout(typingTimer);
    }

    if (newSearch.length > 1) {
      const timer = setTimeout(() => {
        setLoadingSearch(true);
        dispatch(fetchSearch(newSearch)).finally(() => {
          setLoadingSearch(false);
        });
      }, typingTimeout);

      setTypingTimer(timer);
    } else {
      setLoadingSearch(true);
      dispatch(fetchSearch(newSearch)).finally(() => {
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

  return (
    <div className='relative'>
      <InputSearch
        value={search}
        onChange={handleSearch}
        onFocus={onSearch}
        onBlur={onSearchClose}
        placeholder="Cari di Tokopedia"
      />
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
                <LinkStoreSearch href="#" key={index} judul={dataItem.judul} title={dataItem.title} />
              ))}
            </div>
          </div>
        ) : (
          // Result Search
          <div className="h-auto py-3 overflow-y-auto">
            {loadingSearch ? (
            <LoadingSearch />
            ) : (
              <>
                {dataSearch.products.length === 0 && dataSearch.shops.length === 0 ? (
                  <span className='min-h-28 my-48'>Data Tidak Ada</span>
                ) : (
                  <>
                    {dataSearch.products.length > 0 && (
                      <div className="mb-2">
                        {dataSearch.products.map((product, index) => (
                          <LinkResultSearch href='#' key={index} name={product.name} search={search} />
                        ))}
                      </div>
                    )}
                    {dataSearch.shops.length > 0 && (
                      <div>
                        <h3 className='font-bold text-lg'>Toko</h3>
                        {dataSearch.shops.map((shop, index) => (
                          <LinkResultSearch href='#' key={index} name={shop.name} search={search} />
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

export default SearchHeader
