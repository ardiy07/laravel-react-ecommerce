import React, { Suspense, useState } from 'react'
import ButtonLogin from '../components/atoms/ButtonLogin'
import { Link } from 'react-router-dom'
import { ModalLogin } from '../components';
import { LoadingLazzy } from '../../../components';

function AuthHeader() {
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleCloseModal = () => {
        setShowLogin(false);
    };


    return (
        <>
            <div className='flex w-52 justify-around gap-2'>
                <ButtonLogin label='Masuk' onClick={handleLoginClick} />
                <div className='bg-green-600 border px-5 rounded-lg'>
                    <Link to={'/register'} className='flex font-bold py-2 text-white text-sm tracking-tight items-center justify-center'>
                        Daftar
                    </Link>
                </div>
            </div>
            {showLogin &&
                <Suspense>
                    <ModalLogin close={handleCloseModal} />
                </Suspense >
            }
        </>
    )
}

export default AuthHeader
