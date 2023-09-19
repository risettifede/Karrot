import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Nav = () => {
  return (
    <nav className='lg:absolute lg:top-0 xl:absolute xl:top-0 w-full z-50 relative shadow-lg'>
      <div className='bg-pink h-14 md:h-20 lg:h-24 xl:h-32 xl:w-screen flex justify-between'>
        <div className='hidden lg:ml-6 lg:flex lg:w-full lg:items-center xl:ml-8 xl:flex xl:w-full xl:items-center space-x-12 mx-4'>
          <div className='text-white my-4'>
            <Link to='/'>
              <span className='cursor-pointer ml-8 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook xl:text-xl'>
                About
              </span>
            </Link>
          </div>
          <div className='text-white my-4'>
            <Link to='/'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook xl:text-xl'>
                Services
              </span>
            </Link>
          </div>
          <div className='text-white my-4'>
            <Link to='/'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook xl:text-xl'>
                Team
              </span>
            </Link>
          </div>
          <div className='text-white my-4'>
            <Link to='/'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook xl:text-xl'>
                Clients
              </span>
            </Link>
          </div>
          <div className='relative'>
            <Link to='/'>
              <button className='cursor-pointer border-none bg-bubble lg:text-white lg:ml-[400px] xl:text-white xl:ml-[550px] xxl:text-white xxl:ml-[700px] transition-colors duration-300 ease-in-out border px-4 py-2 rounded-md xl:text-xl'>
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
