'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Countdown from './Countdown.svg';
const CountdownTimer = () => {
  const targetDate = new Date('2025-02-14');

  const [timeRemaining, setTimeRemaining] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeRemaining({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
        });
      } else {
        const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0');
        const hours = String(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        const seconds = String(Math.floor((difference % (1000 * 60)) / 1000)).padStart(2, '0');

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className='absolute inset-0'>
      <section
      className="w-full flex flex-col justify-center items-center p-8 relative"
      id="history"
    >
      <Image src={Countdown} alt="Countdown" className="w-full md:w-[75%] xl:w-[20%] h-auto -z-10" />
      <div className="font-lcd text-3xl md:text-5xl xl:text-2xl grid grid-cols-4 gap-2 md:gap-4 xl:gap-2 absolute align-middle justify-center mt-6">
        <div>{timeRemaining.days}
            <br />
            <div className='font-retro text-base md:text-2xl xl:text-base'>Days</div>
        </div>
        <div>{timeRemaining.hours}
            <br />
            <div className='font-retro text-base md:text-2xl xl:text-base'>Hours</div>
        </div>
        <div>{timeRemaining.minutes}
            <br />
            <div className='font-retro text-base md:text-2xl xl:text-base'>Mins</div>
        </div>
        <div>{timeRemaining.seconds}
            <br />
            <div className='font-retro text-base md:text-2xl xl:text-base'>Sec</div>
        </div>
      </div>
    </section>
    </section>
    
  );
};

export default CountdownTimer;