import React, { useState } from 'react'
import { Dropdown, Input } from '../../../../components'
import ButtonTopUp from '../atoms/ButtonTopUp'
import data from '../data/DataTopUp.json'

function FormPulsa() {
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
            <Input
                label="Nomor Telepon"
                type="text"
                placeholder="Masukkan Nomor"
                name="nomor"
                value={formData.nomor}
                onChange={handleChange}
            />
            <Dropdown
                data={data}
                label="Nominal"
                selectedOption={selectedOption}
                onOptionChange={handleOptionChange}
            />
            <ButtonTopUp isFormEmpty={isFormEmpty} label="Beli" />
        </form>
    )
}

export default FormPulsa
