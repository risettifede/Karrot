import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-white font-mont text-black py-6 px-4 md:py-12'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-wrap justify-center space-x-4 md:justify-between'>
          <div className='mb-4 md:mb-0'>
            <a href='#' className='text-xs hover:underline'>
              Política de privacidad
            </a>
            <span className='mx-2'>|</span>
            <a href='#' className='text-xs hover:underline'>
              Términos y condiciones
            </a>
          </div>

          <div className='text-xs mb-4 md:mb-0'>
            <span className=''>KARROT © 2023</span> | Todos los derechos
            reservados
          </div>

          <div className='space-x-4'>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='inline-block text-2xl hover:text-gray-400 transition ease-in-out duration-300' />
            </a>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='inline-block text-2xl hover:text-gray-400 transition ease-in-out duration-300' />
            </a>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <FaTwitter className='inline-block text-2xl hover:text-gray-400 transition ease-in-out duration-300' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
