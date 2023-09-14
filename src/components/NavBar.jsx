import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='xl:absolute xl:top-0 w-full z-50 relative shadow-lg'>
      <div className='bg-pink h-14 md:h-20 lg:h-24 xl:h-32 xl:w-screen flex justify-between'>
        <div className='hidden xl:ml-6 xl:flex xl:w-full xl:items-center space-x-12 mx-4'>
          <div className='text-white my-4'>
            <Link to='/'>
              <span className='cursor-pointer font-italic border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook xl:text-xl'>
                About
              </span>
            </Link>
          </div>
          <div className='text-white my-4'>
            <Link to='/'>
              <span className='cursor-pointer font-italic border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook xl:text-xl'>
                Services
              </span>
            </Link>
          </div>
          <div className='text-white my-4'>
            <Link to='/'>
              <span className='cursor-pointer font-italic border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook xl:text-xl'>
                Team
              </span>
            </Link>
          </div>
          <div className='text-white my-4'>
            <Link to='/'>
              <span className='cursor-pointer font-press border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook xl:text-xl'>
                Clients
              </span>
            </Link>
          </div>
          <div className='relative'>
            <Link to='/'>
              <button className='cursor-pointer border-none bg-bubble text-white ml-[800px] transition-colors duration-300 ease-in-out border px-4 py-2 rounded-md xl:text-xl '>
                Let's talk
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
