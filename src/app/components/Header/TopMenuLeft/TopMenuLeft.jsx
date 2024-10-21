import React from 'react';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const TopMenuLeft = () => {
  return (
    <div className='hidden lg:flex space-x-6 text-sm'>
      <div className='flex items-center space-x-2'>
        <FontAwesomeIcon icon={faPhone} className='fa-light text-white' />
        <Link href='tel:+256214203215'>+256 214 203 215</Link>
      </div>
      <div className='flex items-center space-x-2'>
        <FontAwesomeIcon icon={faEnvelope} className='fa-light text-white' />
        <Link href='mailto:info@rasm.com'>info@rasm.com</Link>
      </div>
      <div className='flex items-center space-x-2'>
        <FontAwesomeIcon icon={faLocationDot} className='fa-light text-white' />
        <span>25 Street, 145 City Town, USA</span>
      </div>
      <div className='flex items-center space-x-2'>
        <FontAwesomeIcon icon={faClock} className='fa-light text-white' />
        <span>Mon - Sat: 8 AM - 3 PM, Sunday Off</span>
      </div>
    </div>
  );
};

export default TopMenuLeft;
