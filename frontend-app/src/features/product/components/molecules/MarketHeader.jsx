import React from 'react'
import { Link } from 'react-router-dom'
import { getAssetImages } from '../../../../utils/pathUtils'
import CardMarketHeader from '../atoms/CardMarketHeader'
import { APP_DEBUG } from '../../../../config/env'

function MarketHeader({ count, dataCards }) {
    if(APP_DEBUG){
        console.log('Data Cards: ', dataCards)
    }
    return (
        <div className='py-2 px-5'>
            <div className='flex justify-between border-b pb-2'>
                <p className='font-bold'>Keranjang {count > 0 && <span className='text-gray-400 font-normal'>(1)</span>}</p>
                <Link to='/' className="text-green-600 font-bold tracking-tight">Lihat</Link>
            </div>
            {count == 0 ? (
                <div className="flex flex-col gap-2 items-center justify-center my-7">
                    <img className="mx-auto mt-10 mb-2" src={getAssetImages('empty-state-pp.png')} alt="market" width="30%" />
                    <p className="font-bold text-xl">Wah, Keranjang belanjamu kosong</p>
                    <p className="font-semibold text-gray-400 text-sm">Yuk, isi dengan barang-barang impianmu!</p>
                    <Link to="/" className="flex justify-center border-green-600 border rounded-md text-green-600 w-48 py-2 font-bold text-sm tracking-tight">
                        Mulai Belanja
                    </Link>
                </div>
            ) : (
                <>
                    {dataCards.map((item, index) => (
                        <CardMarketHeader 
                            key={index}
                            image={item.image}
                            productSlug={item.slug}
                            name={item.name}
                            quantity={item.quantity}
                            alt={item.alt}
                            price={item.priceSale === 0 ? item.price : item.priceSale}
                            priceSale={item.priceSale}
                        />
                    ))}
                </>
            )}
        </div>
    )
}

export default MarketHeader
