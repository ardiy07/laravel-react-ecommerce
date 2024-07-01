import React, { Suspense, useState } from 'react';
import data from './DataPulsa.json';
import { Dropdown, TopUpButton, Input } from '../../atoms';
import ButtonLazy from '../../atoms/button/ButtonLazy';

function FormListrik() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [formData, setFormData] = useState({
        nomor: '',
        nominal: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleOptionChange = (optionValue) => {
        setSelectedOption(optionValue);
        setFormData(prevFormData => ({
            ...prevFormData,
            nominal: optionValue
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    const isFormEmpty = Object.values(formData).some(value => value === '')

    return (
        <form className='flex w-full gap-3 justify-between items-center' onSubmit={handleSubmit}>
            <Suspense fallback={<ButtonLazy />}>
                <Dropdown
                    data={data}
                    label="Jenis Produk Listrik"
                    selectedOption={selectedOption}
                    onOptionChange={handleOptionChange}
                />
            </Suspense>

            <Suspense fallback={<ButtonLazy />}>
                <Input
                    label="No. Meter/ID Pel"
                    type="text"
                    placeholder="Masukkan Nomor"
                    name="nomor"
                    value={formData.nomor}
                    onChange={handleChange}
                />
            </Suspense>
            <Suspense fallback={<ButtonLazy />}>
                <Dropdown
                    data={data}
                    label="Nominal"
                    selectedOption={selectedOption}
                    onOptionChange={handleOptionChange}
                />
            </Suspense>
            <Suspense fallback={<ButtonLazy />}>
                <TopUpButton isFormEmpty={isFormEmpty} label="Beli" />
            </Suspense>
        </form>
    )
}

export default FormListrik