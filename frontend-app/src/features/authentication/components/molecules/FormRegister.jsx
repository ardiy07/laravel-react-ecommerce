import React, { useEffect, useState } from 'react'
import InputAuth from '../atoms/InputAuth';
import { fetchAuthRegister } from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import { APP_DEBUG } from '../../../../config/env';
import { LoadinButtonWhite } from '../../../../components';
import { useNavigate } from 'react-router-dom';
import { resetRegister } from '../../services/slice/registerSlice';

function FormRegister() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error, message, status } = useSelector((state) => state.register);

    const [formRegister, setFormRegister] = useState({
        name: '',
        email: '',
        password: '',
    });
    const handleChange = (event) => {
        setFormRegister({
            ...formRegister,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchAuthRegister(formRegister))
    };

    useEffect(() => {
        if(status === 'succeeded'){
            dispatch(resetRegister())
            setTimeout(() => {
                navigate('/login')
            }, 6000)
        }
    }, [status, navigate, dispatch])

    if (APP_DEBUG) {
        console.log('Error Register: ', error);
        console.log('Status Register: ', status);
        console.log('Message Register: ', message);
        console.log('Form Register: ', formRegister.email);
    }



    return (
        <>
            <form className='flex flex-col gap-1' onSubmit={handleSubmit}>
                <InputAuth
                    label={'Nama Lengkap'}
                    type={'text'}
                    name={'name'}
                    onChange={handleChange}
                    value={formRegister.name}
                    placeholder={'Masukkan Nama Lengkap'}
                    error={message.name}
                />
                <InputAuth
                    label={'Email'}
                    type={'email'}
                    name={'email'}
                    onChange={handleChange}
                    value={formRegister.email}
                    placeholder={'Masukkan Email'}
                    error={message.email}
                />
                <InputAuth
                    label={'Password'}
                    type={'password'}
                    name={'password'}
                    onChange={handleChange}
                    value={formRegister.password}
                    placeholder={'Masukkan Password'}
                    error={message.password}
                />
                <button className='w-full bg-green-600 py-2 rounded-lg text-white font-bold text-base' disabled={status == 'pending' ? true : false} type='submit' >
                    {status == 'pending' ?
                        <LoadinButtonWhite />
                        : 'Daftar'}
                </button>
            </form>
        </>

    )
}

export default FormRegister
