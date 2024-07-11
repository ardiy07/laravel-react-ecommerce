import React from 'react'
import { Link } from 'react-router-dom'
import { getAssetImages } from '../../../../utils/pathUtils'

function MarketEmpetyHeader() {
    return (
        <div className="flex flex-col gap-2 items-center justify-center my-7">
            <img className="mx-auto mt-10 mb-2" src={getAssetImages('empty-state-pp.png')} alt="market" width="30%" />
            <p className="font-bold text-xl">Wah, Keranjang belanjamu kosong</p>
            <p className="font-semibold text-gray-400 text-sm">Yuk, isi dengan barang-barang impianmu!</p>
            <Link to="/login" className="flex justify-center border-green-600 border rounded-md text-green-600 w-48 py-2 font-bold text-sm tracking-tight">
                Mulai Belanja
            </Link>
        </div>
    )
}

export default MarketEmpetyHeader
