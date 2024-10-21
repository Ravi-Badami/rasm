import React from 'react';
import WeChooseLeft from './WeChooseLeft';
import WeChooseRight from './WeChooseRight';

const WeChoose = () => {
  return (
    <div>
      <div className='h-screen w-screen bg-white flex  text-black py-10 justify-center '>
        <div className=' w-[70%] flex space-x-4'>
          <div className='h-full w-1/2'>
            <WeChooseLeft />
          </div>
          <div className='h-full w-1/2 '>
            <WeChooseRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeChoose;
