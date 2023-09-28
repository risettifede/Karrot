// import photo from '../../assets/Resources/photo.png';
import Jeremias from '../../assets/Photos/JeremiasCoppola.png';
import German from '../../assets/Photos/GermanCapelletti.png';
import Tomas from '../../assets/Photos/TomasFuld.png';
import Thomas from '../../assets/Photos/ThomasBransburg.png';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

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

export default function Team() {
  return (
    <div className='flex flex-wrap py-24 -mt-12'>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='max-w-2xl mb-12'>
          <h2 className='text-2xl uppercase text-celeste tracking-tight text-center justify-center -mt-20 xxxxl:ml-64'>
            Team
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'></p>
        </div>

        <div className='grid grid-cols-1 xxl:grid-cols-4 align-center gap-12'>
          {founders.map((person) => (
            <div
              key={person.name}
              className='card font-mont bg-white p-12 rounded-xl shadow-lg ring-1 ring-inset ring-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center'
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
}
