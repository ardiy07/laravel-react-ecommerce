import React, { useState, useEffect, useRef } from 'react';
import InputSearch from '../atoms/InputSearch';
import { useDispatch, useSelector } from 'react-redux';
import LinkStoreSearch from '../atoms/LinkStoreSearch';
import DataPopuler from '../data/SearchPopuler.json';
import LinkResultSearch from '../atoms/LinkResultSearch';
import { fetchSearch } from '../../services/thunks/headerThunks';
import LoadingSearch from '../../../../components/loading/LoadingSearch';
import { APP_DEBUG } from '../../../../config/env';
import { useLocation, useNavigate } from 'react-router-dom';
import IconHeader from '../atoms/IconHeader';

function SearchHeader({ onOpen, onClose }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [typingTimer, setTypingTimer] = useState(null);
  const [loadingSearch, setLoadingSearch] = useState(false);

  const dispatch = useDispatch();
  const typingTimeout = 500;

  const { dataSearch } = useSelector((state) => state.search);

  const searchContainerRef = useRef(null);

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
        dispatch(fetchSearch(newSearch)).finally(() => {
          setLoadingSearch(false);
        });
      }, typingTimeout);

      setTypingTimer(timer);
    } else {
      setLoadingSearch(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      navigate(`/search?query=${search}`);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        onSearchClose();
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

  // Initialize search query from URL query parameters
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const newQuery = queryParams.get('query');

  useEffect(() => {
    if (newQuery) {
      setSearch(newQuery);
    }
  }, [newQuery]);

  if (APP_DEBUG) {
    console.log('Data Search: ', dataSearch);
  }

  return (
    <div className='relative w-full'>
      <div className='relative w-full' onClick={onSearch}>
        <InputSearch
          value={search}
          onChange={handleSearch}
          onKeyPress={handleKeyPress}
          placeholder="Cari di Tokopedia"
        />
        <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
          <span className='icon-search'>
          </span>
        </div>
      </div>

      {/* Result */}
      <div ref={searchContainerRef} className={`absolute px-4 h-auto z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-md w-full ${isFocus ? 'block' : 'hidden'}`}>
        {search === '' ? (
          <div className='rounded-md px-1 my-4'>
            <h1 className='font-bold text-lg'>Paling Populer</h1>
            <div className='grid grid-cols-2 gap-3 my-2'>
              {DataPopuler.map((dataItem, index) => (
                <LinkStoreSearch key={index} title={dataItem.title} />
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
                {dataSearch && dataSearch.dataProduct && dataSearch.dataProduct.length === 0 && dataSearch.dataShope && dataSearch.dataShope.length === 0 ? (
                  <span className='min-h-28 my-48'>Data Tidak Ada</span>
                ) : (
                  <>
                    {dataSearch && dataSearch.dataProduct && dataSearch.dataProduct.length > 0 && (
                      <div className="mb-2">
                        {dataSearch.dataProduct.map((product, index) => (
                          <LinkResultSearch key={index} query={product} name={product} search={search} />
                        ))}
                      </div>
                    )}
                    {dataSearch && dataSearch.dataShope && dataSearch.dataShope.length > 0 && (
                      <div>
                        <h3 className='font-bold text-lg'>Toko</h3>
                        {dataSearch.dataShope.map((shope, index) => (
                          <LinkResultSearch key={index} query={shope} name={shope} search={search} />
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

export default SearchHeader;
