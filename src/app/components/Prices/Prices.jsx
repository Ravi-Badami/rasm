import React from 'react';
import PriceList from './PriceList';
import Title_shape from '../../public/Title_shape_1';

const Prices = () => {
  return (
    <div>
      <div className='h-screen w-screen price-sec flex justify-end text-lg'>
        <div className='w-2/3  h-full flex flex-col justify-center items-center  '>
          <div className='w-[80%] flex flex-col justify-center items-center space-y-6'>
            <p className='text-black'>Nail & Hand Care</p>
            <Title_shape />
            <p className='text-3xl font-bold text-black'>
              Step Into The World of Nail Styling Perfection
            </p>
            <div className=' w-full'>
              <PriceList name='Manicure' desc='Elemental tempus getas' price='$26' />
              <PriceList
                name='Nail Clippers'
                desc='Quality products, customized services'
                price='$15'
              />
              <PriceList
                name='Manicure & Pedicure'
                desc='Premium quality nail polishes'
                price='$34'
              />
              <PriceList
                name='Hand/nail Moisturizer'
                desc='Rejuvenating hand or foot massage'
                price='$60'
              />
              <PriceList name='Nail Art' desc='Vibrant colors, finishes' price='$46' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
