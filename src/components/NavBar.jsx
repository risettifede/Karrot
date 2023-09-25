import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='w-screen shadow-lg hidden lg:block absolute top-0 bg-white'>
      <div className='grid grid-cols-[repeat(5,1fr),auto] h-24 gap-8 items-center px-10 xl:px-8'>
        {['ABOUT', 'SERVICES', 'TEAM', 'CLIENTS'].map((item, index) => (
          <div key={index} className='text-pink'>
            <Link to='/'>
              <span className='cursor-pointer border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:border-yellowbook xl:text-xl'>
                {item}
              </span>
            </Link>
          </div>
        ))}

        <div>
          <Link to='/'>
            <button className='cursor-pointer border-none bg-bubble shadow-xl text-white duration-300 ease-in-out border px-4 py-2 rounded-md xl:text-md hover:scale-105 transition-transform xl:duration-300'>
              LETS TALK
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
