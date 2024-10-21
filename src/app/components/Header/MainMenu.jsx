import Link from 'next/link';
import React, { useState } from 'react';
import LogoBlack from '../../public/images/logo-black';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';

import Grid from '../../public/images/grid';
import Button from '../UI/Button';

const MainMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='bg-black shadow-sm sticky top-0 z-50 text-white '>
      <div className='container    flex justify-between items-center'>
        {/* Logo */}
        <div className='bg-white h-16 w-3/12 parallelogram flex justify-center items-center'>
          <Link href='/'>
            <LogoBlack />
          </Link>
        </div>

        {/* Navigation */}
        <div className='  flex px-10 justify-between items-center w-2/4 '>
          <nav className='hidden lg:flex space-x-6   '>
            <ul className='flex space-x-6  w-full   justify-between items-center  '>
              <li className='relative group'>
                <Link href='/'>Home</Link>
              </li>
              <li className='relative group'>
                <Link href='/about'>About Us</Link>
              </li>
              <li className='relative group'>
                <Link href='/about'>Portfolio</Link>
              </li>
              <li className='relative group'>
                <Link href='/services'>Pages</Link>
              </li>
              <li className='relative group'>
                <Link href='/shop'>Shop</Link>
              </li>
              <li className='relative group'>
                <Link href='/about'>Blog</Link>
              </li>
              <li>
                <Link href='/contact'>Contact Us</Link>
              </li>
            </ul>
          </nav>
          {/* Mobile Menu Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className='lg:hidden'>
            <i className='far fa-bars'></i>
          </button>
          {/* Mobile Menu */}
          {menuOpen && (
            <nav className='lg:hidden absolute top-full left-0 w-full bg-white shadow-lg'>
              <ul className='flex flex-col space-y-2 p-4'>
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <Link href='/about'>About Us</Link>
                </li>
                <li>
                  <Link href='/services'>Services</Link>
                </li>
                <li>
                  <Link href='/shop'>Shop</Link>
                </li>
                <li>
                  <Link href='/contact'>Contact Us</Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
        <div className=' w-1/3 '>
          <div className='header-container  flex items-center justify-around'>
            <button type='button' className='icon-btn searchBoxToggler'>
              <div className='bg-gray-500 flex items-center  justify-center rounded-full h-8 w-8'>
                <FontAwesomeIcon icon={faSearch} className='h-4 w-4' />
              </div>
            </button>
            <Link href='/home-nail-stylist#' className='icon-btn sideMenuToggler2'>
              <div className='bg-gray-500 flex items-center  justify-center rounded-full h-8 w-8'>
                <FontAwesomeIcon icon={faCartShopping} className='h-4 w-4' />
              </div>
            </Link>
            <Link href='/home-nail-stylist#' className='icon-btn sideMenuToggler'>
              <div className='bg-gray-500 flex items-center  justify-center rounded-full h-8 w-8'>
                <Grid className='h-4 w-4' />
              </div>
            </Link>
            <Link href='/appointment' className='th-btn style3'>
              <Button name='APPOINTMENT NOW' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
