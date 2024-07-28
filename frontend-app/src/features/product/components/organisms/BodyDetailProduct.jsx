import React, { useEffect, useState } from 'react'
import GaleriProduct from '../molecules/GaleriProduct'
import TitleDetailProduct from '../molecules/TitleDetailProduct'
import RateDetailProduct from '../molecules/RateDetailProduct'
import LoadingBodyDetail from '../molecules/LoadingBodyDetail'
import { APP_DEBUG } from '../../../../config/env'
import { discountPercentage, formatCurrency } from '../../../../utils/formatUtils'
import { useDispatch } from 'react-redux'
import { setProductSelected } from '../../services/slice/productDetailSlice'
import { getAssetImageApi } from '../../../../utils/pathUtils'
import Location from '../../../../components/icon/Location'
import Ekspedisi from '../../../../components/icon/Ekspedisi'
import AddCircle from '../../../../components/icon/AddCircle'
import SearchHeader from '../../../templates/components/molecules/SearchHeader'
import InputSearch from '../../../templates/components/atoms/InputSearch'

function BodyDetailProduct({ data }) {
    const [selectedVariant, setSelectedVariant] = useState({});
    const [selectedProduct, setSelectedProduct] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (data && data.productBase && data.children) {
            const productBaseChild = data.children.find(child => child.id === data.productBase.children);
            if (productBaseChild && productBaseChild.variantName) {
                const defaultVariants = {};
                productBaseChild.variantName.forEach((name, index) => {
                    const variantKey = data.variants[index].name;
                    defaultVariants[variantKey] = name;
                });
                setSelectedVariant(defaultVariants);
            }
        }
    }, [data]);

    useEffect(() => {
        if (data && data.children) {
            let selectedProduct = null;
            if (Object.keys(selectedVariant).length > 0) {
                const selectedVariantIDs = [];
                data.variants.forEach(variant => {
                    const variantName = selectedVariant[variant.name];
                    const variantItem = variant.varians.find(v => v.name === variantName);
                    if (variantItem) {
                        selectedVariantIDs.push(variantItem.id);
                    }
                });
                selectedProduct = data.children.find(child =>
                    selectedVariantIDs.every(id => child.variantID.includes(id))
                );
            }
            if (!selectedProduct && data.children.length > 0) {
                selectedProduct = data.children[0];
            }

            setSelectedProduct(selectedProduct);
            dispatch(setProductSelected(selectedProduct));
        }
    }, [data, selectedVariant, dispatch]);


    const handleVariantClick = (type, name) => {
        setSelectedVariant(prev => ({ ...prev, [type]: name }));
    };

    if (!data || !data?.productBase) {
        return <LoadingBodyDetail />;
    }

    if (APP_DEBUG) {
        console.log('Data Detail Product : ', data);
        console.log('Variant : ', selectedVariant);
        console.log('Product Select : ', selectedProduct);
    }

    return (
        <>
            <div className='flex h-fit bg-white px-4 py-5 gap-5 shadow rounded-lg border'>
                <div className='pr-5'>
                    <GaleriProduct image={selectedProduct?.image} media={data?.media} />
                </div>
                <div className='w-full flex flex-col'>
                    {/* Title */}
                    <TitleDetailProduct icon={data.shope?.icon} name={data.productBase?.name} />
                    {/* Rat, Order */}
                    <RateDetailProduct rating={data.productBase?.rating} order={data.productBase?.order} review={data.productBase?.review} />
                    {/* Price */}
                    <div className='bg-gray-50 mt-3 py-2 rounded-lg px-2 flex gap-4 items-center'>
                        {selectedProduct?.priceSale != 0 ?
                            <>
                                <p className=' text-lg font-medium line-through text-gray-400'>{formatCurrency(selectedProduct?.price)}</p>
                                <p className='text-xl font-semibold'>{formatCurrency(selectedProduct?.priceSale)}</p>
                                <p className='text-sm font-medium bg-green-500 px-2 rounded text-white'>{discountPercentage(selectedProduct?.price, selectedProduct?.priceSale)}% OFF</p>
                            </>
                            :
                            <p className=' text-xl font-semibold'>{formatCurrency(selectedProduct?.price)}</p>
                        }
                    </div>

                    {/* Type */}
                    {data.variants?.map(variant => (
                        <div className='my-4' key={variant.id}>
                            <div className='flex flex-col gap-3'>
                                <p className='font-semibold text-gray-700 tracking-tight capitalize'>
                                    Pilih {variant.name}:
                                    <span className='ml-1 font-medium text-gray-500'>
                                        {selectedVariant[variant.name]}
                                    </span>
                                </p>
                                <div className='flex flex-wrap gap-2'>
                                    {variant.varians.map((varian, index) => (
                                        <div
                                            key={varian.id}
                                            className={`w-fit relative py-1 px-2 rounded-lg text-gray-500 border overflow-hidden hover:bg-green-100 hover:border-green-500 hover:text-green-700 ${selectedVariant[variant.name] === varian.name ? 'bg-green-100 border-green-500 text-green-700' : ''}`}
                                            onClick={() => handleVariantClick(variant.name, varian.name)}
                                        >
                                            <button className='flex px-2 items-center text-sm font-semibold'>
                                                {varian.image && <img src={varian.image} className='w-7' alt={varian.name} />}
                                                {varian.name}
                                                {/* <span className='bg-red-500 absolute flex items-center text-xs pl-[0.14rem] text-white w-7 h-12 -bottom-5 -right-3 rotate-45'>%</span> */}
                                                {/* {variant.name === 'warna' && selectedVariant.color === varian.name && (
                                            )} */}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className='mt-2'>
                        <div className='border-y px-4 py-2'>
                            <div className='flex gap-2 items-center'>
                                <div className='relative'>
                                    <span className={`w-3 h-3 absolute rounded-full -top-1 -left-1 shadow-lg ${data.shope.lastActive === 'online' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                    <img src={getAssetImageApi(data.shope.image)} className='w-8 rounded-full' />
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-base font-bold tracking-tight text-gray-600'>{data.shope.name}</p>
                                    <p className='text-sm tracking-tight font-medium text-gray-500'>
                                        {data.shope.lastActive === 'online' ?
                                            'Online' :
                                            `Online: ${data.shope.lastActive}`
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-1 mt-2 w-[30rem]'>
                        <h2 className='font-semibold text-gray-700 tracking-tight text-lg'>Pengiriman</h2>
                        <div className='flex gap-1 items-center'>
                            <Location />
                            <p className='font-medium text-gray-700'>Di kirim dari <span className='font-bold text-gray-900'>{data.shope.city}</span></p>
                        </div>
                        <div className='flex gap-1'>
                            <div className=''>
                                <Ekspedisi />
                            </div>
                            <button className='text-start tracking-tight leading-tight text-gray-900 font-[400]'>
                                Lengkapi pinpoint alamatmu supaya pengiriman barang ini bisa lebih akurat. <span className='text-green-500 font-bold'>Lengkapi Alamat </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* Modal Add Alamat */}
            <div className='fixed inset-0 bg-slate-700 bg-opacity-70 z-50 w-screen h-screen flex items-center justify-center'>
                <div className=' bg-white border shadow w-[60rem] h-fit rounded-xl pt-4 pb-6'>
                    <div className='flex justify-end w-full mb-1 px-5'>
                        <button>
                            <svg
                                className="unf-icon"
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                                fill="var(--color-icon-enabled, #2E3137)"
                                style={{ display: 'inline-block', verticalAlign: 'middle' }}
                            >
                                <path d="m13.06 12 7.47-7.47a.75.75 0 1 0-1.06-1.06L12 10.94 4.53 3.47a.75.75 0 1 0-1.06 1.06L10.94 12l-7.47 7.47a.75.75 0 0 0 1.06 1.06L12 13.06l7.47 7.47a.75.75 0 0 0 1.06-1.06L13.06 12Z"></path>
                            </svg>
                        </button>
                    </div>
                    {/* Body */}
                    <div className='flex flex-col gap-5'>
                        <div className='tracking-tight leading-tight mx-5'>
                            <h3 className='font-bold text-gray-800 text-xl'>Mau kirim belanjaan kemana?</h3>
                            <p className='font-semibold text-gray-600'>Biar pengalaman belanjamu lebih baik, pilih alamat dulu.</p>
                        </div>
                        <div className='bg-white border rounded-md mx-5'>
                            <buton className='w-full flex flex-col items-center justify-center py-3 leading-tight tracking-tight'>
                                <div className='w-6'>
                                    <AddCircle />
                                </div>
                                <div className='font-bold text-gray-800 mt-3'>
                                    Tambah Alamat Pengirimanmu
                                </div>
                                <div>
                                    Kamu belum memiliki alamat
                                </div>
                            </buton>
                        </div>
                        <div className='w-full border-t'>
                            <div className='flex mx-5 pt-5 gap-7'>
                                <div className='w-full'>
                                    <div className='relative'>
                                        <InputSearch
                                            // value={search}
                                            // onChange={handleSearch}
                                            // onKeyPress={handleKeyPress}
                                            placeholder="Pilih Kota atau Kecamatan"
                                        />
                                        <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
                                            <span className='icon-search'>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='w-full h-auto border-2 mt-1 rounded-md'>
                                        <p className='border-b py-2 px-4'><span className="font-bold">Ambulu </span>Kab. Jember, Jawa Timur</p>
                                        <p className='border-b py-2 px-4'><span className="font-bold">Ambulu </span>Kab. Jember, Jawa Timur</p>
                                        <p className='border-b py-2 px-4'><span className="font-bold">Ambulu </span>Kab. Jember, Jawa Timur</p>
                                        <p className='border-b py-2 px-4'><span className="font-bold">Ambulu </span>Kab. Jember, Jawa Timur</p>
                                    </div>
                                </div>
                                <div className=''>
                                    <button className='bg-green-500 text-white font-bold rounded-md px-14 py-2'>Gunakan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BodyDetailProduct
