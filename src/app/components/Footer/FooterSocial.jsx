import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const FooterSocial = () => {
  return (
    <div className='flex  w-[70%] justify-between  items-center'>
      <Link href='https://www.facebook.com ' className='h-14 w-14 bg-[#AB6A49] center-div '>
        <FontAwesomeIcon icon={faFacebookF} className='fa-light text-white  text-xl' />
      </Link>
      <Link href='https://www.twitter.com' className='h-14 w-14 bg-gray-600 center-div '>
        <FontAwesomeIcon icon={faTwitter} className='fa-light text-white center-div text-xl' />
      </Link>
      <Link href='https://www.linkedin.com' className='h-14 w-14 bg-gray-600 center-div '>
        <FontAwesomeIcon icon={faInstagram} className='fa-light text-white text-xl ' />
      </Link>
      <Link href='https://www.linkedin.com' className='h-14 w-14 bg-gray-600 center-div '>
        <FontAwesomeIcon icon={faLinkedinIn} className='fa-light text-white  text-xl' />
      </Link>
    </div>
  );
};

export default FooterSocial;
