import React, { useState, useEffect } from 'react';
import './CountdownTimer.css'; // File CSS untuk styling dan animasi

const CountdownTimer = ({ expirationString }) => {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  useEffect(() => {
    const expirationDate = new Date(expirationString).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = expirationDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        // Handle expired case
        setHours('00');
        setMinutes('00');
        setSeconds('00');
      } else {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Format numbers to always have two digits
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        setHours(formattedHours);
        setMinutes(formattedMinutes);
        setSeconds(formattedSeconds);

        // Trigger animation class
        document.getElementById('seconds').classList.add('countdown-animate');
        setTimeout(() => {
          document.getElementById('seconds').classList.remove('countdown-animate');
        }, 300); // Timing to match animation duration (0.3s)
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [expirationString]);

  return (
    <div className='flex gap-1'>
      <p className='text-base flex items-center justify-center bg-red-500 text-white w-[32px] h-8 text-center rounded-md font-bold'>{hours}</p>
      <p className='text-xl text-red-500 font-bold'>:</p>
      <p className='text-base flex items-center justify-center bg-red-500 text-white w-[32px] h-8 text-center rounded-md font-bold'>{minutes}</p>
      <p className='text-xl text-red-500 font-bold'>:</p>
      <p className='text-base flex items-center justify-center relative overflow-hidden bg-red-500 text-white w-[32px] h-8 text-center rounded-md font-bold'>
        {/* <span id='seconds' className='absolute bg-red-500 w-[32px] h-5 top-0 opacity-60'>
        </span> */}
        {seconds}
      </p>
    </div>
  );
};

export default CountdownTimer;
