import React, { useEffect, useState } from 'react'
import { MainTamplate } from '../../templates';
import { useLocation } from 'react-router-dom'
import { SearchResultProduct } from '../components';

function ProductPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [query, setQuery] = useState(queryParams.get('query'));

  useEffect(() => {
    const newQuery = queryParams.get('query');
    setQuery(newQuery);
    if(newQuery !== query) {
      window.location.reload();
    }
  }, [location.search]);


  return (
    <MainTamplate>
      <div className='my-7 mx-11 flex gap-3'>
        <div className='bg-white w-80 shadow rounded-md border px-2 py-2 h-fit'>
          Filter
        </div>
        <div className='w-full'>
          <SearchResultProduct query={query}/>
        </div>

      </div>
    </MainTamplate>
  )
}

export default ProductPage
