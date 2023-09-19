import { Link } from 'react-router-dom';
import Instagram from '../icons/Instagram';
import Twitter from '../icons/Twitter';
import Linkedin from '../icons/Linkedin';

const Footer = () => {
  return (
    <footer className='bg-blue-500 h-[500px] xl:h-24 no-scroll-x'>
      <div className='h-full flex justify-center md:justify-between items-center mx-4 md:mx-6 xl:mx-8 xxl:mx-8'>
        <Link>
          <Instagram />
        </Link>
        <Link>
          <Twitter />
        </Link>
        <Link>
          <Linkedin />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
