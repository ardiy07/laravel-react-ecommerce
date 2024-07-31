import React from 'react';
import Location from '../../../../components/icon/Location';
import InputAddress from '../atoms/InputAddress';
import TextareaAddress from '../atoms/TextareaAddress';

function AddDetail({ formDetail, setFormDetail }) {
    if (typeof formDetail !== 'object' || typeof setFormDetail !== 'function') {
        console.error('Invalid prop types');
        return null;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDetail((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className='flex flex-col gap-5'>
            <h3 className='font-bold text-xl tracking-tight'>Lengkapi detail alamat</h3>
            <div className='flex flex-col gap-2'>
                <p className='px-2'>Pinpoint</p>
                <div className='flex bg-white shadow-md rounded-lg border py-3 px-3 items-center gap-2'>
                    <Location />
                    <p className='text-sm tracking-tight'>Andongsari, Kec. Ambulu, Kab.</p>
                </div>
                <div className="flex flex-col space-y-5 mt-1">
                    <InputAddress
                        name="label"
                        value={formDetail.label || ''}
                        onChange={handleChange}
                        maxLength={30}
                        label="Label Alamat"
                        required={true}
                    />
                    <TextareaAddress
                        name="alamatLengkap"
                        value={formDetail.alamatLengkap || ''}
                        onChange={handleChange}
                        maxLength={200}
                        label="Alamat Lengkap"
                        required={true}
                    />
                    <InputAddress
                        name="catatan"
                        value={formDetail.catatan || ''}
                        onChange={handleChange}
                        maxLength={45}
                        label="Catatan Untuk Kurir (Opsional)"
                        required={false}
                        note={'Warna rumah, patokan, pesan khusus, dll.'}
                    />
                    <span className='w-full h-1 bg-gray-200'></span>
                    <InputAddress
                        name="namaPenerima"
                        value={formDetail.namaPenerima || ''}
                        onChange={handleChange}
                        maxLength={50}
                        label="Nama Penerima"
                        required={true}
                    />
                    <InputAddress
                        name="nomorTelepon"
                        value={formDetail.nomorTelepon || ''}
                        onChange={handleChange}
                        maxLength={50}
                        label="Nomor HP"
                        type={'tel'}
                        required={true}
                    />
                </div>
            </div>
        </div>
    );
}

export default AddDetail;
