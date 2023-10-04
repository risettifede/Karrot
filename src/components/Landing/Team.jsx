// import photo from '../../assets/Resources/photo.png';
import Jeremias from '../../assets/Photos/JeremiasCoppola.png';
import German from '../../assets/Photos/GermanCapelletti.png';
import Tomas from '../../assets/Photos/TomasFuld.png';
import Thomas from '../../assets/Photos/ThomasBransburg.png';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import equis from '../../assets/Resources/Equis.webp';
import circle from '../../assets/Resources/Circle.webp';

const founders = [
  {
    name: 'Jeremías Coppola',
    role: 'Co-founder',
    imageUrl: Jeremias,
  },
  {
    name: 'Germán Capelletti',
    role: 'Co-founder',
    imageUrl: German,
  },
  {
    name: 'Thomas Bransburg',
    role: 'Co-founder',
    imageUrl: Thomas,
  },
  {
    name: 'Tomás Fuld',
    role: 'Co-founder',
    imageUrl: Tomas,
  },
];

const Team = () => {
  return (
    <div className='relative py-24 -mt-12 items-center justify-center'>
      <img
        src={equis}
        alt='Background Image'
        className='absolute h-56 rotate-10 top-[19%] left-[53%] object-cover z-0'
      />
      <img
        src={circle}
        alt='Background Image'
        className='absolute h-56 rotate-10 top-[64%] -left-[9%] object-cover z-0'
      />

      <div className='mx-auto max-w-7xl px-6 z-10 relative'>
        <div className='max-w-2xl mt-10 mb-4 flex flex-col items-center'>
          <h2 className='text-2xl uppercase text-celeste tracking-tight -mt-10 xxxxl:ml-[82%] xxxl:ml-[82%] lg:text-3xl'>
            Team
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'></p>
        </div>

        <div className='grid grid-cols-1 xxl:grid-cols-4 align-center gap-20'>
          {founders.map((person) => (
            <div
              key={person.name}
              className='card font-mont bg-white p-12 rounded-xl shadow-lg ring-1 ring-inset ring-gray-300 hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center'
            >
              <img
                className='h-32 w-32 mb-4 rounded-full object-cover transform translate-y-1'
                src={person.imageUrl}
                alt={person.name}
              />
              <div className='text-center'>
                <h3 className='text-xl font-semibold leading-7 tracking-tight text-gray-900'>
                  {person.name}
                </h3>
                <p className='text-md font-bold leading-6'>{person.role}</p>
                <div className='flex mt-2 space-x-2 justify-center'>
                  <a href='#' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin
                      size={20}
                      className='text-bubble hover:text-violet transition ease-in-out duration-300'
                    />
                  </a>
                  <a href='#' target='_blank' rel='noopener noreferrer'>
                    <FaTwitter
                      size={20}
                      className='text-bubble hover:text-violet transition ease-in-out duration-300'
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Team;
