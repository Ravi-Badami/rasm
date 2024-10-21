import React from 'react';

const OurServiceCard = ({ name }) => {
  return (
    <div className='h-[40%]  w-full center-div flex-col bg-white'>
      <div className='bg-gray-600 w-[90%] h-[70%] center-div'></div>
      <div className='start'>
        <p className='mt-1 -ml-20 text-black'>{name}</p>
      </div>
    </div>
  );
};

export default OurServiceCard;
