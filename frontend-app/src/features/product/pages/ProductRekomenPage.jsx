import React, { Suspense, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MainTamplate } from '../../templates';
import { ProductRekomendasi } from '../components';
function ProductRekomenPage() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const [exat, setExat] = useState(null);
    const [prod, setProd] = useState(null);
    const [shope, setShope] = useState(null);

    useEffect(() => {
        const exatValue = searchParams.get('exat');
        const prodValue = searchParams.get('prod');
        const shopeValue = searchParams.get('shope');

        setExat(exatValue);
        setProd(prodValue);
        setShope(shopeValue);
    }, [location.search]);

    return (
        <MainTamplate>
            <div className='px-16'>
                <div className='bg-rekomendasi mt-3 px-24'>
                    {exat === 'rekom_1' && (
                        <p className='font-normal text-white text-5xl tracking-tight'>
                            Lainnya
                            <span className='font-bold mx-2'>
                                Di Toko ini
                            </span>
                        </p>
                    )}

                    {exat === 'rekom_2' && (
                        <p className='font-normal text-white text-5xl tracking-tight capitalize'>
                            {prod.replace(/-/g, ' ')}
                            <span className='font-bold mx-2'>
                                Lainnya Untukmu
                            </span>
                        </p>
                    )}


                </div>
                {exat &&
                    <ProductRekomendasi exat={exat} prod={prod} shope={shope} />
                }
            </div>
        </MainTamplate>
    );
}

export default ProductRekomenPage;
