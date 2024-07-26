import React from 'react'
import { Link } from 'react-router-dom'
import { getAssetImages } from '../../../../utils/pathUtils'
import CardMarketHeader from '../atoms/CardMarketHeader'
import { APP_DEBUG } from '../../../../config/env'

function MarketHeader({ count, dataCards }) {
    if (APP_DEBUG) {
        console.log('Data Cards: ', dataCards)
    }
    return (
        <div className='h-fit'>
            <div className='flex justify-between border-b pb-2 px-5 py-2'>
                <p className='font-bold'>Keranjang {count > 0 && <span className='text-gray-400 font-normal'>({count})</span>}</p>
                <Link to='/' className="text-green-600 font-bold tracking-tight">Lihat</Link>
            </div>
            <div className="max-h-96 overflow-y-scroll pt-2">
                {count == 0 ? (
                    <div className="flex flex-col gap-2 items-center justify-center my-7 max-h-96">
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
                                image={item.product.image}
                                shopeSlug={item.shope.slug}
                                productSlug={item.product.slug}
                                name={item.product.name}
                                quantity={item.quantity}
                                price={item.product.price}
                                priceSale={item.product.priceSale}
                                variants={item.type.variantName}
                            />
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}

export default MarketHeader
