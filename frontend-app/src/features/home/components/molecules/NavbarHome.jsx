import React, { useEffect, useState } from 'react'

function NavbarHome({children}) {
    const [style, setStyle] = useState('');
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 2000) {
                setStyle('fixed top-[7.8rem] pt-2 shadow-md border-b pb-2');
            } else {
                setStyle('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className='bg-white relative mt-10'>
            <div className={`z-20 bg-white mb-3 w-full px-16 ${style}`}>
                <div className='flex gap-2 items-start'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default NavbarHome
