import React from 'react';
import Title_shape from '../../public/Title_shape_1';
import Line2 from '../../public/Line_2';
import Choose1 from '../../public/Choose_1';
import Choose2 from '../../public/Choose_2';
import Choose3 from '../../public/Choose_3';
/* eslint-disable react/no-unescaped-entities */

const WeChooseLeft = () => {
  return (
    <div>
      <div className=''>
        <div className='flex-col space-y-3'>
          <div className='flex gap-4 items-center'>
            <p className='text-[#C28565] font-bold'>Why choose us</p>
            <Line2 />
          </div>
          <p className='text-3xl font-bold text-black'>
            We Have 25 Years Of Experience With Nail Style.
          </p>
          <p>
            ravi ravi ravi ravi ravi ravi ravi ravi vravi ravi ravi ravi ravi ravi vravi ravi ravi
            ravi ravi ravi ravi ravi ravi ravi ravi ravi ravi ravi ravi ravi{' '}
          </p>
        </div>
        <div className=' mt-4 h-56'>
          <div className='flex'>
            <div className=''>
              <Choose1 />
            </div>
            <div className='ml-5'>
              <p>Brand Nail Art Equipment</p>
              <p className='mt-3 text-sm'>
                From classic manicures and pedicures to intricate nail art and personalized nail
                extensions
              </p>
            </div>
          </div>
          <div className='flex mt-3'>
            <div className=''>
              <Choose2 />
            </div>
            <div className='ml-5'>
              <p>Best Place</p>
              <p className='mt-3 text-sm'>
                That's why we only use premium quality nail polishes, gel, and other nail products
                from trusted brands.
              </p>
            </div>
          </div>
          <div className='flex mt-3'>
            <div className=''>
              <Choose3 />
            </div>
            <div className='ml-5'>
              <p>Special Support</p>
              <p className='mt-3 text-sm'>
                That's why we only use premium quality nail polishes, gel, and other nail products
                from trusted brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeChooseLeft;
