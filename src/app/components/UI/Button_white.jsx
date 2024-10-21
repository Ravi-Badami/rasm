import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Button = ({ name }) => {
  return (
    <div className='border border-[#C28565] text-[#C28565] px-5  flex text-sm w-56 py-3'>
      {name}
      <FontAwesomeIcon icon={faArrowRight} className='ms-2' />
    </div>
  );
};

export default Button;
