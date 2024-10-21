import React from 'react';
import Title_shape from '../../public/Title_shape_1';
import OurServiceCard from './OurServiceCard';

const OurServices = () => {
  return (
    <div>
      <div className='h-screen w-screen service-sec'>
        <div className='h-1/3 w-full  flex  justify-center flex-col items-center  space-y-3'>
          <p className='text-[#C28565] font-bold'>Our service</p>
          <Title_shape />
          <p className='text-3xl font-bold text-black'>
            Step Into The World of Nail Styling Perfection
          </p>
        </div>
        <div className='w-full flex justify-center h-2/3 space-x-4 '>
          <div className='   w-1/6 flex-col space-y-5 justify-between '>
            <OurServiceCard name='Nail Manicure' />
            <OurServiceCard name='>Nail Art' />
          </div>
          <div className='w-2/5'>
            <div className='h-[85%]  w-full'></div>
          </div>
          <div className='   w-1/6 flex-col space-y-5 justify-between '>
            <OurServiceCard name='Nail Pedicure' />
            <OurServiceCard name='Nail Paraffin Hands' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
