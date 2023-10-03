import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-100 font-mont text-black justify-center items-center text-center py-6 px-4 lg:py-8 xxxl:justify-between '>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col items-center space-y-4 lg:flex-row lg:justify-center lg:space-x-4 lg:space-y-0'>
          <div className='mb-4 lg:mb-0'>
            <a href='#' className='text-xs hover:underline'>
              Política de privacidad
            </a>
            <span className='mx-2'>|</span>
            <a href='#' className='text-xs hover:underline'>
              Términos y condiciones
            </a>
          </div>

          <div className='text-xs mb-4'>
            <span className='lg:text-md'>KARROT © 2023</span> | Todos los
            derechos reservados
          </div>

          <div className='space-x-4'>
            <a
              href='https://www.linkedin.com/company/karrot-economy-design/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin className='inline-block text-2xl hover:text-gray-400 transition ease-in-out duration-300' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
