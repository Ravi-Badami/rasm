import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faSkype,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const TopMenuRight = () => {
  return (
    <div className='flex items-center space-x-4 text-sm'>
      <span>Follow Us:</span>
      <Link href='https://www.facebook.com'>
        <FontAwesomeIcon icon={faFacebookF} className='fa-light text-white' />
      </Link>
      <Link href='https://www.twitter.com'>
        <FontAwesomeIcon icon={faTwitter} className='fa-light text-black' />
      </Link>
      <Link href='https://www.linkedin.com'>
        <FontAwesomeIcon icon={faLinkedinIn} className='fa-light text-black' />
      </Link>
      <Link href='https://www.instagram.com'>
        <FontAwesomeIcon icon={faInstagram} className='fa-light text-black' />
      </Link>
      <Link href='https://www.youtube.com'>
        <FontAwesomeIcon icon={faYoutube} className='fa-light text-black' />
      </Link>
      <Link href='https://www.skype.com'>
        <FontAwesomeIcon icon={faSkype} className='text-black transition-colors duration-300' />
      </Link>
    </div>
  );
};

export default TopMenuRight;
