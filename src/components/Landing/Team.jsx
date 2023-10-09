// import photo from '../../assets/Resources/photo.png';
import Jeremias from '../../assets/Photos/JeremiasCoppola.png';
import German from '../../assets/Photos/GermanCapelletti.png';
import Tomas from '../../assets/Photos/TomasFuld.png';
import Thomas from '../../assets/Photos/ThomasBransburg.png';
import { FaLinkedin } from 'react-icons/fa';
import equis from '../../assets/Resources/Equis.webp';
import circle from '../../assets/Resources/Circle.webp';

const founders = [
  {
    name: 'Jeremías Coppola',
    role: 'Co-founder',
    imageUrl: Jeremias,
    linkedInUrl: 'https://www.linkedin.com/in/jeremiascoppola/',
  },
  {
    name: 'Germán Cappelletti',
    role: 'Co-founder',
    imageUrl: German,
    linkedInUrl: 'https://www.linkedin.com/in/german-cappelletti/',
  },
  {
    name: 'Thomas Bransburg',
    role: 'Co-founder',
    imageUrl: Thomas,
    linkedInUrl: 'https://www.linkedin.com/in/thomas-bransburg/',
  },
  {
    name: 'Tomás Fuld',
    role: 'Co-founder',
    imageUrl: Tomas,
    linkedInUrl: 'https://www.linkedin.com/in/tomas-andres-fuld-2bb00715b/',
  },
];

const Team = () => {
  return (
    <div
      id='team'
      className='relative py-24 -mt-12 items-center justify-center'
    >
      <img
        src={equis}
        alt='Background Image'
        className='absolute h-56 rotate-10 top-[19%] left-[53%] object-cover z-0
        lg:h-48 lg:top-[40%] lg:left-[76%]
        xxxl:h-60 xxxl:top-[10%] xxxl:left-[72%]
        xxxxl:h-60 xxxxl:top-[10%] xxxxl:left-[82%]'
      />
      <img
        src={circle}
        alt='Background Image'
        className='absolute h-56 rotate-10 top-[64%] -left-[9%] object-cover z-0
        lg:h-48 lg:rotate-10 lg:top-[83%] lg:-left-[1%]
        xxxl:h-48 xxxl:rotate-10 xxxl:top-[76%] xxxl:left-[10%]
        xxxxl:h-48 xxxxl:rotate-10 xxxxl:top-[76%] xxxxl:left-[1%]'
      />

      <div className='mx-auto max-w-7xl px-6 z-10 relative'>
        <div className='max-w-2xl mt-10 mb-4 flex flex-col items-center'>
          <h2 className='text-2xl uppercase text-celeste tracking-tight -mt-10 xxxxl:ml-[82%] xxxl:ml-[82%] lg:text-3xl'>
            Team
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'></p>
        </div>

        <div
          className='grid grid-cols-1 xxl:grid-cols-4 align-center gap-12
        lg:grid-cols-2
        xxl:gap-12'
        >
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
                  <a
                    href={person.linkedInUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FaLinkedin
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
