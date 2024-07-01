import React, { useState } from 'react'
import Header from '../organisms/Header/Header'
import Footer from '../organisms/Footer/Footer'
import useAuth from '../../hooks/useAuth';

function MainTamplate(props) {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const handleOverlayOpen = () => setIsOverlayVisible(true);
    const handleOverlayClose = () => setIsOverlayVisible(false);
    const { isLogin } = useAuth();
    return (
        <>
            <Header onOverlayOpen={handleOverlayOpen} onOverlayClose={handleOverlayClose} auth={isLogin}/>
            {props.children}
            <Footer />
            {isOverlayVisible && (
                <div className="fixed inset-0 bg-slate-700 bg-opacity-50 z-20"></div>
            )}
        </>
    )
}

export default MainTamplate