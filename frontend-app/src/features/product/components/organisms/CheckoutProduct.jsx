import React, { Suspense, useState } from 'react'
import { formatCurrency } from '../../../../utils/formatUtils';
import Quantity from '../atoms/Quantity';
import AddNoted from '../../../../components/icon/AddNoted';
import Chat from '../../../../components/icon/Chat';
import Share from '../../../../components/icon/Share';
import { useDispatch, useSelector } from 'react-redux';
import { APP_DEBUG } from '../../../../config/env';
import { fetchAddCard } from '../../services';
import { ModalLogin } from '../../../authentication/components';
import { LoadinButtonWhite } from '../../../../components';
import LoadingCheckout from '../molecules/LoadingCheckout';

function CheckoutProduct({ auth }) {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const data = useSelector((state) => state.productDetail.productSelected);
    const loadData = useSelector((state) => state.productDetail.status);
    const [showFormLogin, setShowFormLogin] = useState(false);
    const { status, error } = useSelector((state) => state.addCard);

    const handleCard = (event) => {
        event.preventDefault();
        if (auth) {
            dispatch(fetchAddCard({
                productId: data.id,
                quantity: quantity
            }))
        } else {
            setShowFormLogin(true)
        }
    }

    const handleCloseModal = () => {
        setShowFormLogin(false);
    };

    if (APP_DEBUG) {
        console.log('Data Detail Cekc: ', data)

    }

    if(loadData === 'pending') {
        return <LoadingCheckout />
    }


    return (
        <>
            <div className='border rounded-lg py-3 px-4 shadow bg-white flex flex-col gap-2 sticky top-36'>
                {/* title */}
                <div className='flex flex-col gap-1'>
                    <h3 className='font-semibold tracking-tight'>Atur Jumlah dan Catatan</h3>
                    <div className='flex items-center gap-2 '>
                        <img src={data.image} className='w-12' />
                        <p className='line-clamp-1 text-sm font-semibold tracking-tight'>{data?.variantName?.join(', ')}</p>
                    </div>
                    <p className='tracking-tight line-clamp-1 pt-1 border-b capitalize'>{data.name}</p>
                </div>
                {/* quantity */}
                <div className='flex flex-col gap-2 justify-start'>
                    <div className='flex mt-3 gap-3'>
                        <Quantity value={quantity} onChange={setQuantity} maxOrder={data.promotion?.maxOrder} minOrder={data.promotion?.minOrder}/>
                        <p>Stock: <span className='font-semibold'>{data.promotion?.stock}</span></p>
                    </div>
                    <div>
                        <button className='text-green-500 text-sm tracking-tight'>
                            <AddNoted />
                            <b>Tambah Catatan</b>
                        </button>
                    </div>
                </div>
                {/* subtotal */}
                <div className='flex flex-col justify-end'>
                    {data.priceSale != 0 ?
                        <>
                            <p className='text-end line-through text-gray-400'>{formatCurrency(data.price)}</p>
                            <div className='flex justify-between items-end'>
                                <p className='text-gray-400  font-medium text-base tracking-tight'>Subtotal</p>
                                <p className='text-lg font-bold'>{formatCurrency(data.priceSale * quantity)}</p>
                            </div>
                        </>
                        :
                        <>
                            <div className='flex justify-between items-end'>
                                <p className='text-gray-400  font-medium text-base tracking-tight'>Subtotal</p>
                                <p className='text-lg font-bold'>{formatCurrency(data.price * quantity)}</p>
                            </div>
                        </>
                    }
                </div>
                {/* Button */}
                <div className='flex flex-col gap-2'>
                    <div className='w-full flex justify-center'>
                        <button className='bg-green-500 w-full py-[0.35rem] rounded-lg border border-green-500' onClick={handleCard}>
                            {status === 'pending' ? <LoadinButtonWhite /> : <p className='text-white font-bold text-base tracking-tight'><b>+ </b>Keranjang</p>}
                        </button>
                    </div>
                    <div className='w-full flex justify-center'>
                        <button className='bg-white w-full py-[0.35rem] rounded-lg border border-green-500'>
                            <p className='text-green-500 font-bold text-base tracking-tight'>Beli Langsung</p>
                        </button>
                    </div>
                </div>
                {/* other */}
                <div className='flex items-center justify-center gap-2 my-1'>
                    <div className='flex items-center'>
                        <Chat />
                        <p className='text-sm font-bold text-gray-600 tracking-tight'>Chat</p>
                    </div>
                    <span className='w-[0.05rem] h-5 bg-black'></span>
                    <div className='flex items-center'>
                        <Share />
                        <p className='text-sm text-gray-600 font-bold tracking-tight'>Share</p>
                    </div>
                </div>
            </div>
            {showFormLogin &&
                <Suspense>
                    <ModalLogin close={handleCloseModal} />
                </Suspense >
            }
        </>
    )
}

export default CheckoutProduct
