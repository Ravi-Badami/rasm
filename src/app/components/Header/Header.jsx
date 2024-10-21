'use client'; // Add this line at the top

import '../../../../font-awesome.config';

import TopMenuLeft from './TopMenuLeft/TopMenuLeft';

import TopMenuRight from './TopMenuRight/TopMenuRight';
import MainMenu from './MainMenu';

const Header = () => {
  return (
    <header className='th-header header-layout2'>
      {/* Top Bar */}
      <div className='header-top py-2 bg-[#C28565] text-white'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap justify-between items-center'>
            <TopMenuLeft />
            <TopMenuRight />
          </div>
        </div>
      </div>
      {/* Main Menu */}
      <MainMenu />
    </header>
  );
};

export default Header;
