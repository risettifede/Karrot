import photo from '../../assets/Resources/photo.png';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const founders = [
  {
    name: 'Jeremías Coppola',
    role: 'Co-founder',
    imageUrl: photo,
  },
  {
    name: 'Jeremías Coppola',
    role: 'Co-founder',
    imageUrl: photo,
  },
  {
    name: 'German Cappelletti',
    role: 'Co-founder',
    imageUrl: photo,
  },
];

export default function Team() {
  return (
    <div className='flex flex-wrap bg-pink py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='max-w-2xl mb-12'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl text-center bg-slate-400 justify-center mt-8'>
            Team
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'></p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 align-center gap-12'>
          {founders.map((person) => (
            <div
              key={person.name}
              className='card bg-gray-100 p-12 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center'
            >
              <img
                className='h-40 w-40 mb-4 rounded-full object-cover transform translate-y-1'
                src={person.imageUrl}
                alt={person.name}
              />
              <div className='text-center'>
                <h3 className='text-xl font-semibold leading-7 tracking-tight text-gray-900'>
                  {person.name}
                </h3>
                <p className='text-md font-semibold leading-6 text-violet'>
                  {person.role}
                </p>
                <div className='flex mt-2 space-x-4 justify-center'>
                  <a href='#' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin className='text-bubble hover:text-violet transition ease-in-out duration-300' />
                  </a>
                  <a href='#' target='_blank' rel='noopener noreferrer'>
                    <FaTwitter className='text-bubble hover:text-violet transition ease-in-out duration-300' />
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
