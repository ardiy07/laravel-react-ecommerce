import React, { Suspense, useState } from 'react'
import { InputSearch } from '../../atoms'
import DataPopuler from '../../../components/molecules/search/DataPopuler'
import Links from '../../atoms/Links'
import { getAssetIcons } from '../../../utils/pathUtils'
import ButtonLazy from '../../atoms/button/ButtonLazy'

function Search({ onOpen, onClose }) {
    const [search, setSearch] = useState('')
    const [isFocus, setIsFocus] = useState(false)

    const [loadingSearch, setLoadingSearch] = useState(false)
    const [productResult, setProductResult] = useState([])

    const onSearch = () => {
        setIsFocus(true)
        onOpen()
    }

    const onSearchClose = () => {
        setIsFocus(false)
        onClose()
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }


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
                <img src={getAssetIcons('search.svg')} />
            </div>

            {/* Result */}
            <div className={`absolute px-4 h-auto z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-md w-full ${isFocus ? 'block' : 'hidden'}`}>
                {/* {loadingSearch && <LoadingSpinner />} */}
                {/* Data Populer */}
                {search === '' ? (
                    <div className={`rounded-md px-1 my-4`}>
                        <h1 className='font-bold text-lg'>Paling Populer</h1>
                        <div className='grid grid-cols-2 gap-3 my-2'>
                            {DataPopuler.map((dataItem, index) => (
                                <Links.Search href="#" key={index}>
                                    <div className='flex py-2'>
                                        <div className='my-auto px-2'>
                                            <img src="./vite.svg" alt="coba logo" />
                                        </div>
                                        <div className='flex-grow px-2'>
                                            <h5 className='font-semibold line-clamp-1'>{dataItem.judul}</h5>
                                            <p className='text-sm text-gray-600 font-medium'>{dataItem.title}</p>
                                        </div>
                                    </div>
                                </Links.Search>
                            ))}
                        </div>
                    </div>
                ) : (
                    // Result Search
                    <div className="max-h-52 py-3">
                        {loadingSearch === false && productResult.length === 0 || search.length > 1 ? (
                            <span className=' min-h-28 my-48'>Data Tidak Ada</span>
                        ) : (
                            productResult.map((product, index) => (
                                <Links.Search href='#'>
                                    <p className="py-2 px-3 rounded-md hover:bg-gray-100">
                                        {/* <Icon.Search icon={faSearch} /> */}
                                        <span className='pl-3 text-gray-600'>
                                            Product
                                        </span>
                                    </p>
                                </Links.Search>
                            ))
                        )}
                    </div>
                )}
            </div>

        </div>
    )
}

export default Search