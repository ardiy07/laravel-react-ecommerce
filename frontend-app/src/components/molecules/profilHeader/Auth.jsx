import React, { Suspense, useState } from 'react'
import { Link } from 'react-router-dom';
import ModalLoginPage from '../../../features/authentication/pages/ModalLoginPage';
import { AuthButton } from '../../atoms';
import ButtonLazy  from '../../atoms/button/ButtonLazy';

function Auth() {
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
                    <Suspense fallback={<ButtonLazy />}>
                        <AuthButton label='Masuk' onClick={handleLoginClick} />
                    </Suspense>

                <div className='bg-green-600 border px-5 rounded-lg'>
                    <Link to={'/register'} className='flex font-bold py-2 text-white text-sm tracking-tight items-center justify-center'>
                        Daftar
                    </Link>
                </div>
            </div>

            {showLogin && <ModalLoginPage close={handleCloseModal} />}
        </>
    )
}

export default Auth
