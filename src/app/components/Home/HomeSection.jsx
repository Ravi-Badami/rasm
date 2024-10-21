import Image from 'next/image';
import React, { useState } from 'react';
import hero_image from '../../public/hero_image.png';
import nail from '../../public/nail.png';
import Button from '../UI/Button';

const HomeSection = () => {
  return (
    <div>
      <section className='bg-[#F9F3F0] py-12  h-screen w-screen'>
        <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center '>
          {/* Left side text */}
          <div className='lg:w-1/2 w-full ml-40 text-center lg:text-left  '>
            <h1 className=' font-bold text-gray-800 mb-4'>Welcome to Rasm Nail Stylist</h1>
            <p className='text-6xl text-gray-600 mb-6 font-playfair'>NAIL ARTISTRY</p>
            <div className='flex items-center bg'>
              <Image src={nail} alt='nail Image' width={100} height={100} />
              <span className='text-black text-6xl'>THAT SHINES</span>
            </div>
            <div className='mt-10'>
              <Button name='DISCOVER MORE' />
            </div>
          </div>

          {/* Right side image */}
          <div className='lg:w-1/2 w-full  lg:mb-0 flex justify-center '>
            <Image
              src={hero_image}
              alt='Hero Image'
              width={500}
              height={500}
              className='mt-[5.5rem]'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
