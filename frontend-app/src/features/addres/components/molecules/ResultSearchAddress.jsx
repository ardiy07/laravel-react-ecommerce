import React from 'react';
import Location from '../../../../components/icon/Location';

function ResultSearchAddress({ village, district, regencie, province, districtID, code, lat, long, setValue, setSearch }) {
    const handleClickResult = () => {
        setSearch(`${village}, ${regencie}, ${province}`);
        setValue({
            districtID,
            code,
            lat,
            long,
            village,
            district,
            regencie,
            province
        });
    };

    return (
        <div
            className='flex py-2 px-4 border-b leading-tight tracking-tight gap-2 cursor-pointer'
            onClick={handleClickResult}
        >
            <div className='w-fit'>
                <Location />
            </div>
            <div className='flex flex-col'>
                <p className='font-bold text-base'>{village}</p>
                <p className='text-base text-gray-900'>{`${regencie}, ${province}`}</p>
            </div>
        </div>
    );
}

export default ResultSearchAddress;
