import React, { useState } from 'react'
import InputAuth from '../atoms/InputAuth'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthLogin } from '../../services';
import { useNavigate } from 'react-router-dom';
import { setItemLocalStorage } from '../../../../config/localStorageConfig';

function FormLogin() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const { error, message, status, token } = useSelector((state) => state.login);

    const [formLogin, setFormLogin] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        setFormLogin({
            ...formLogin,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formLogin.email || !formLogin.password) {
            console.log('Mohon lengkapi email dan password.');
            return;
        }
        dispatch(fetchAuthLogin(formLogin))
    };

    if(status === 'succeeded'){
        setItemLocalStorage('authData', token)
        setItemLocalStorage('isLogin', true)
        navigate('/')
    }


    return (
        <div className='flex flex-col'>
            <form className='flex flex-col' onSubmit={handleSubmit} >
                <div className='flex flex-col gap-3'>
                    <InputAuth
                        label={'Email'}
                        type={'email'}
                        name={'email'}
                        onChange={handleChange}
                        value={formLogin.email}
                        placeholder={'Masukkan email'}
                    />
                    <InputAuth
                        label={'Password'}
                        type={'password'}
                        name={'password'}
                        onChange={handleChange}
                        value={formLogin.password}
                        placeholder={'Masukkan password'}
                    />
                </div>
                {error && <span className='text-red-500 m-0 p-0 text-sm font-semibold text-start items-start'>{message}</span>}
                <div className='w-full flex flex-col items-end gap-1 mt-1'>
                    <a href='#' className='text-green-600 text-sm'>Butuh Bantuan?</a>
                    <button className={`w-full  py-2 rounded-lg text-white font-bold text-base ${status == 'pending' ? 'bg-gray-400' : 'bg-green-600'}`} disabled={status == 'pending' ? true : false} type='submit'>Masuk</button>
                </div>
            </form>
        </div>
    )
}

export default FormLogin
