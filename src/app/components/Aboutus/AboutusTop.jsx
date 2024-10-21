import React from 'react';
import Title_shape from '../../public/Title_shape_1';
import Button from '../UI/Button';
import ButtonWhite from '../UI/Button_white';

const AboutusTop = () => {
  return (
    <div className='flex  justify-center flex-col items-center h-full space-y-3'>
      <p className='text-[#C28565] font-bold'>About us</p>
      <Title_shape />
      <p className='text-3xl font-bold'>Step Into The World of Nail Styling Perfection</p>
      <p className=' w-[45%] text-center text-xs'>
        At our Nail Style Salon, we understand that each client is unique, and their nail
        preferences vary. That&apos;s why we offer customized nail services tailored to your
        specific needs. Whether you&apos;re looking for a classic French manicure, a chic and
        sophisticated look for a special event.
      </p>
      <div className='flex space-x-8'>
        <Button name='  MORE ABOUT US' />
        <ButtonWhite name='MAKE A CALL' />
      </div>
    </div>
  );
};

export default AboutusTop;
