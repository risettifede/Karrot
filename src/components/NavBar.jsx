import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='w-screen shadow-lg hidden lg:block absolute top-0 bg-white z-30'>
      <div className='grid grid-cols-[repeat(5,1fr),auto] h-24 gap-8 items-center px-10 xl:px-8'>
        {['ABOUT', 'SERVICES', 'TEAM', 'CLIENTS'].map((item, index) => (
          <div key={index} className='text-pink font-mont'>
            <Link>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook lg:text-ms xl:text-xl'>
                {item}
              </span>
            </Link>
          </div>
        ))}

        <div className='font-press lg:w-[50px]'>
          <Link>
            <a
              href='#formulario'
              className='cursor-pointer border-none bg-bubble shadow-xl text-white duration-300 ease-in-out border px-4 py-3.5 rounded-md hover:scale-105 transition-transform
              lg:px-6 lg:text-xs 
              xl:text-sm xl:duration-300'
            >
              LETS TALK
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
