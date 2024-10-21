import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Button = ({ name }) => {
  return (
    <div className='bg-[#C28565]  px-5  text-white flex text-sm w-56 py-3'>
      {name}
      <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
    </div>
  );
};

export default Button;
