import React, { useState } from 'react'
import './login.css'
import { Input } from '../../../components/atoms'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthLogin } from '../services/authThunks'


function ModalLoginPage(props) {
    const { error, status, message, isLogin } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

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

        dispatch(fetchAuthLogin(formLogin));
    };

    if (!error && isLogin && status !== 'idle' && status !== 'pending') {
        window.location.reload();
    }

    // console.log(error, status, message, isLogin);

    return (
        <div className='fixed inset-0 bg-slate-700 bg-opacity-70 z-50 w-screen h-screen flex items-center justify-center'>
            <div className=' bg-white border shadow w-96 h-[30rem] rounded-xl py-3 px-5'>
                <div className='flex justify-end w-full mb-1'>
                    <button onClick={props.close}>
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

                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-bold text-3xl'>Masuk</h1>
                        <Link to={'/register'} className='font-semibold text-green-600 text-base'>
                            Daftar
                        </Link>
                    </div>
                    <div className='flex flex-col'>
                        <form className='flex flex-col' onSubmit={handleSubmit} >
                            <div className='flex flex-col gap-3'>
                            <Input
                                label={'Email'}
                                type={'email'}
                                name={'email'}
                                onChange={handleChange}
                                value={formLogin.email}
                                placeholder={'Masukkan email'}
                                />
                            <Input
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
                                <button className=' w-full bg-green-600 py-2 rounded-lg text-white font-bold text-base' type='submit'>Masuk</button>
                            </div>
                        </form>
                    </div>
                    <div className='flex w-full justify-center items-center'>
                        <span className='w-[60%] bg-gray-300 h-[0.125rem]'></span>
                        <p className='w-full text-center text-sm text-gray-400'>atau masuk dengan</p>
                        <span className='w-[60%] bg-gray-300 h-[0.125rem]'></span>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-center border py-2 rounded-lg border-gray-400'>
                            <button className='flex items-center gap-2 text-gray-500 font-semibold'>
                                <span>
                                    <svg
                                        className="unf-icon"
                                        viewBox="0 0 24 24"
                                        width="20"
                                        height="20"
                                        fill="var(--color-icon-enabled, #2E3137)"
                                        style={{ display: 'inline-block', verticalAlign: 'middle' }}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M19.8 2.24h-2.2a.75.75 0 0 0 0 1.5h2.2c.26 0 .45.15.45.36v2.2a.75.75 0 1 0 1.5 0V4.1a1.89 1.89 0 0 0-1.95-1.86ZM21 16.85a.75.75 0 0 0-.75.75v2.2a.35.35 0 0 1-.35.34h-2.2a.75.75 0 1 0 0 1.5h2.2a1.84 1.84 0 0 0 1.85-1.84v-2.2a.75.75 0 0 0-.75-.75ZM3.527 6.827A.76.76 0 0 1 3 7.05a.76.76 0 0 1-.75-.75V4.1A1.86 1.86 0 0 1 4.1 2.24h2.3a.75.75 0 0 1 0 1.5H4.1a.36.36 0 0 0-.35.36v2.2a.76.76 0 0 1-.223.527ZM6.3 20.24H4.1c-.2 0-.35-.18-.35-.44v-2.2a.75.75 0 1 0-1.5 0v2.2a1.87 1.87 0 0 0 1.85 1.94h2.2a.75.75 0 1 0 0-1.5Zm11.7-9.5h-4a.75.75 0 0 1-.75-.75v-4a.76.76 0 0 1 .75-.75h4a.75.75 0 1 1 0 1.5h-3.25v2.5H18a.75.75 0 1 1 0 1.5Zm-8-5.5H6a.76.76 0 0 0-.75.76v4a.75.75 0 1 0 1.5 0V6.74h2.5V10a.75.75 0 1 0 1.5 0V6a.76.76 0 0 0-.75-.76Zm-4 8h4a.76.76 0 0 1 .75.76v3.99a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-4a.76.76 0 0 1 .75-.75Zm.75 4h2.5v-2.5h-2.5v2.5Zm11.78 1.29a.75.75 0 0 0 .22-.53v-4a.75.75 0 1 0-1.5 0v3.25H14a.75.75 0 1 0 0 1.5h4a.75.75 0 0 0 .53-.22ZM13.5 14.5a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1v-.5Z"
                                        ></path>
                                    </svg>
                                </span>
                                Scan Kode QR
                            </button>
                        </div>
                        <div className='flex justify-center border py-3 rounded-lg border-gray-400'>
                            <button className='flex items-center gap-2 font-bold text-sm'>
                                Metode Lain
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ModalLoginPage