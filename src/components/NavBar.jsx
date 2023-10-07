// import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='w-screen shadow-lg hidden lg:block absolute top-0 bg-white z-30'>
      <div className='flex justify-between h-24 items-center px-10 xl:px-8'>
        <div className='flex space-x-8 '>
          {[
            { name: 'ABOUT', href: '#about' },
            { name: 'SERVICES', href: '#services' },
            { name: 'TEAM', href: '#team' },
            { name: 'CLIENTS', href: '#clients' },
          ].map((item, index) => (
            <div key={index} className='text-bubble xl:ml-10'>
              <a href={item.href}>
                <div
                  className='cursor-pointer 
                lg:text-sm lg:hover:scale-105 lg:transition-all lg:duration-300
                xl:text-sm'
                >
                  {item.name}
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className='font-press'>
          <a
            href='#formulario'
            className='cursor-pointer border-none bg-bubble shadow-xl text-white duration-300 ease-in-out border px-4 py-3.5 rounded-md 
              lg:px-2
              xl:text-sm xl:hover:scale-105 xl:transition-transform xl:mr-20'
          >
            LET`S TALK
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
