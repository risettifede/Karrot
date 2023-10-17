import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-100 font-mont text-black justify-center items-center text-center py-4 px-4 lg:py-8 '>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col items-center space-y-4 lg:flex-row lg:justify-between lg:space-y-0'>
          <div className='text-xs mb-4 lg:mb-0'>
            <span className='lg:text-md font-extrabold'>KARROT © 2023</span>
          </div>

          {/* <div className='mb-4 lg:mb-0 xxxl:-ml-[23%]'>
            <a href='#' className='text-xs hover:underline'>
              Política de privacidad
            </a>
            <span className='mx-6'>|</span>
            <a href='#' className='text-xs hover:underline'>
              Términos y condiciones
            </a>
          </div> */}

          <div className='space-x-4'>
            <a
              href='https://www.linkedin.com/company/karrot-economy-design/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin className='inline-block text-2xl  hover:shadow-xl hover:scale-105 transition-all duration-300 text-bubble hover:text-celeste' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
