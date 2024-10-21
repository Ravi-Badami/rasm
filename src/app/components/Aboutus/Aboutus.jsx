import React from 'react';
import AboutusTop from './AboutusTop';
import AboutusBottom from './AboutusBottom';

const Aboutus = () => {
  return (
    <div>
      <div className='h-screen w-screen bg-white text-black'>
        <div className='flex flex-col'>
          <div className=' h-80 '>
            <AboutusTop />
          </div>
          <div className=' h-80'>
            <AboutusBottom />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
