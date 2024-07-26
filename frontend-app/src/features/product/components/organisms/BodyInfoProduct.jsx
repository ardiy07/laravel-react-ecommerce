import React, { useEffect, useState } from 'react'
import '../../../../assets/css/icons.css'
import { LoadingUlasan } from '../../../../components';
import LinkPageInfo from '../atoms/LinkPageInfo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviewsDetail } from '../../../review';
import { APP_DEBUG } from '../../../../config/env';
import ReviewDetail from '../molecules/ReviewDetail';

function BodyInfoProduct({ productSlug }) {
    const dispatch = useDispatch();
    const { data, status } = useSelector((state) => state.reviewsDetail);

    useEffect(() => {
        dispatch(fetchReviewsDetail(productSlug));
    }, [dispatch, productSlug]);

    const deskripsi = useSelector((state) => state.productDetail.data.productBase?.deskripsi);
    const spesifikasi = useSelector((state) => state.productDetail.data.product?.spesifikasi);
    const [currentPage, setCurrentPage] = useState("Deskripsi");

    if (APP_DEBUG) {
        console.log('status review: ', status)
        console.log('data review: ', data)
    }
    const formattedDescription = deskripsi?.replace(/\n/g, '<br/>');

    return (
        <div className='mt-5 flex gap-2 w-full'>
            <div className='flex flex-col h-fit sticky top-36'>
                <div className='bg-white py-3 px-5 shadow border rounded-lg flex flex-col gap-2 justify-center'>
                    <h2 className='font-semibold text-xl text-gray-700 tracking-tight'>Ulasan Pembeli</h2>
                    <div className='flex flex-col gap-1'>
                        <div className='flex justify-center'>
                            <i className='stars-icon'></i>
                            <p className='font-semibold text-5xl'>{data.avgRating}<span className='text-sm text-gray-500'>/5.0</span></p>
                        </div>
                        <div className='flex gap-1 text-sm justify-center text-gray-500'>
                            <p className='tracking-tight'>{data.sumRating} rating</p>
                            <span>.</span>
                            <p className='tracking-tight'>{data.sumReview} ulasan</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        {data.rating?.length > 0 && status === 'succeeded' &&
                            <>
                                {data.rating.map((item, index) => (
                                    <div className='flex justify-center items-center gap-2' key={index}>
                                        <p className='flex items-center gap-[0.2rem] text-gray-500 font-medium'>
                                            <span className='flex'>
                                                <i className='stars-icon'></i>
                                            </span>
                                            {item.rating}
                                        </p>
                                        <div className="overflow-hidden h-2 w-40 text-xs flex rounded bg-gray-200">
                                            <div style={{ width: `${item.total / data.sumReview * 100}` + '%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                                        </div>
                                        <p className='text-gray-500 text-base'>{item.total}</p>
                                    </div>
                                ))}
                            </>

                        }
                    </div>
                </div>
            </div>
            <div className='w-full bg-white shadow border rounded-md h-fit'>
                <div className='text-center'>
                    <ul className='grid grid-flow-col grid-cols-3 w-full cursor-pointer'>
                        <LinkPageInfo page={currentPage} onClick={() => setCurrentPage("Deskripsi")} title="Deskripsi" />
                        <LinkPageInfo page={currentPage} onClick={() => setCurrentPage("Spesifikasi")} title="Spesifikasi" />
                        <LinkPageInfo page={currentPage} onClick={() => setCurrentPage("Ulasan")} title="Ulasan" />
                    </ul>
                </div>
                <div className='px-7 py-3'>
                    {currentPage === "Deskripsi" &&
                        <div className='min-h-52'>
                             <p dangerouslySetInnerHTML={{ __html: formattedDescription }} />
                        </div>
                    }
                    {currentPage === "Spesifikasi" &&
                        <div className='min-h-52'>
                            <p className='text-justify tracking-tight leading-tight'>
                                {spesifikasi}
                            </p>
                        </div>
                    }
                    {currentPage === "Ulasan" &&
                        <div className='flex flex-col gap-2'>
                            {status === 'pending' && <LoadingUlasan />}
                            {status === 'succeeded' &&
                                <>
                                    {data.reviews.map((item, index) => (
                                        <ReviewDetail key={index} comment={item.review.comment} created={item.review.created} image={item.review.user.image} name={item.review.user.name} stars={item.review.rating} />
                                    ))}
                                </>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default BodyInfoProduct