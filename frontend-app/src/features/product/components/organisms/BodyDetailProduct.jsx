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

function BodyDetailProduct({ data }) {
    const [selectedVariant, setSelectedVariant] = useState({});
    const [selectedProduct, setSelectedProduct] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (data && data.variants) {
            const defaultVariants = {};
            data.variants.forEach(variant => {
                if (variant.varians.length > 0) {
                    defaultVariants[variant.name] = variant.varians[0].name;
                }
            });

            setSelectedVariant(defaultVariants);
        }
    }, [data]);

    useEffect(() => {
        if (data && data.children) {
            let selectedProduct;
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
        <div className='flex h-fit bg-white px-4 py-5 gap-5 shadow rounded-lg border'>
            <div className='pr-5'>
                <GaleriProduct image={selectedProduct?.image} />
            </div>
            <div className='w-full flex flex-col'>
                {/* Title */}
                <TitleDetailProduct icon={data.shope?.icon} name={data.productBase?.name} />
                {/* Rat, Order */}
                <RateDetailProduct rating={data.productBase?.rating} order={data.productBase?.order} review={data.productBase?.review} />
                {/* Price */}
                <div className='bg-gray-50 mt-3 py-2 rounded-lg px-2 flex gap-4 items-center'>
                    {selectedProduct.priceSale != 0 ?
                        <>
                            <p className=' text-lg font-medium line-through text-gray-400'>{formatCurrency(selectedProduct.price)}</p>
                            <p className='text-xl font-semibold'>{formatCurrency(selectedProduct.priceSale)}</p>
                            <p className='text-sm font-medium bg-green-500 px-2 rounded text-white'>{discountPercentage(selectedProduct.price, selectedProduct.priceSale)}% OFF</p>
                        </>
                        :
                        <p className=' text-xl font-semibold'>{formatCurrency(selectedProduct.price)}</p>
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
            </div>
        </div>
    )
}

export default BodyDetailProduct
