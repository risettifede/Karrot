import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='relative w-screen shadow-lg hidden md:hidden lg:block lg:absolute lg:top-0'>
      <div className='bg-white h-14 md:h-20 lg:h-24 xl:h-24 xl:w-screen flex justify-between'>
        <div className='hidden space-x-14 mx-4 lg:ml-6 lg:flex lg:w-full lg:items-center xl:ml-8 xl:flex xl:w-full xl:items-center'>
          <div className='text-pink my-4'>
            <Link to='/'>
              <span className='cursor-pointer ml-8 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook xl:text-xl xl:ml-20'>
                ABOUT
              </span>
            </Link>
          </div>
          <div className='text-pink my-4'>
            <Link to='/'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook xl:text-xl'>
                SERVICES
              </span>
            </Link>
          </div>
          <div className='text-pink my-4'>
            <Link to='/'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook xl:text-xl'>
                TEAM
              </span>
            </Link>
          </div>
          <div className='text-pink my-4'>
            <Link to='/'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook xl:text-xl'>
                CLIENTS
              </span>
            </Link>
          </div>
          <div className='relative'>
            <Link to='/'>
              <button className='cursor-pointer border-none bg-bubble shadow-xl lg:text-white lg:ml-[400px] xl:text-white xl:ml-[490px] xxl:text-white xxl:ml-[650px] transition-colors duration-300 ease-in-out border px-4 py-2 rounded-md xl:text-md xl:hover:scale-105 lg:transition-transform xl:duration-300'>
                LETS TALK
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
