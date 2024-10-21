import Image from 'next/image';
import React from 'react';
import choose_img from '../../public/choose_1.png';
import flower_img from '../../public/flower_1_3.png';

const WeChooseRight = () => {
  return (
    <div className='h-full w-full'>
      <div className=' h-full w-full rounded-tl-[11rem]'>
        <Image src={choose_img} alt='choose Image' width={400} height={400} />
        <Image
          src={flower_img}
          alt='choose Image'
          width={150}
          height={150}
          className='absolute -ml-14 -mt-16'
        />
      </div>
    </div>
  );
};

export default WeChooseRight;
