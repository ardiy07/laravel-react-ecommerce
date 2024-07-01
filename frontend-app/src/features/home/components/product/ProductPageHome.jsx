import React, { useState } from 'react'
import CardProduk from '../../../../components/molecules/card/CardProduk'

function ProductPageHome(props) {
    const [length, setLength] = useState(props.data);

    return (
        <div className='mb-8 mx-16'>
            <div className='grid grid-cols-6'>
                {Array.from({ length: length }).map((_, index) => (
                    <CardProduk
                        key={index}
                        url='#'
                        image={index + 1}
                        title={`Kupon Diskon ${index + 1}`}
                        price={10000}
                        rating="4.5"
                        promo="Diskon 10%"
                        sold={index + 115}
                        discount="10000"
                    />
                ))}
            </div>
            <div className='mt-5 flex items-center justify-center'>
                <button className='text-green-600 font-bold text-base border border-green-600 py-2 px-14 rounded-lg' onClick={ () => setLength(length + 24)}>
                    Muat Lebih Banyak
                </button>
            </div>
        </div>
    )
}

export default ProductPageHome