'use client';

import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className='bg-gray-800 text-with py-4 px-6 flex items-center justify-between sm:px-6 lg:px-8'>
      <div className='flex items-center'>
        <a href='/' className='font-bold text-2xl'>
          PrivFi
        </a>
      </div>

      <nav
        className={`fixed top-0 mt-[72px] 
         right-0 h-screen w-full bg-gray-800 text-white p-4 text-center transition-all duration-300 ease-in-out ${
           isMenuOpen ? 'right-0' : '-right-full'
         }`}
      >
        <ul>
          <li className='py-8'>
            <a href='/' className='hover:text-gray-300'>
              Home
            </a>
          </li>
          <li className='py-8'>
            <a href='/about' className='hover:text-gray-300'>
              About
            </a>
          </li>
          <li className='py-8'>
            <a href='/contact' className='hover:text-gray-300'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div
        className={`fixed left-0 bottom-0 bg-black opacity-50 z-10 text-white transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={toggleMenu}
      ></div>
      <button
        onClick={toggleMenu}
        className='md:hidden rounded-md p-2 bg-gray-700 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
      >
        <svg
          className='h-6 w-6'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
            clipRule='evenodd'
          ></path>
        </svg>
      </button>
    </header>
  );
}
export default Header;
