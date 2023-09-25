import photo from '../../assets/photo.png';

const founders = [
  {
    name: 'Jeremías Coppola',
    role: 'Co-founder',
    imageUrl: photo,
  },
  {
    name: 'Federico Risetti',
    role: 'Co-founder',
    imageUrl: photo,
  },
  {
    name: 'Federico Risetti',
    role: 'Co-founder',
    imageUrl: photo,
  },
];

export default function Team() {
  return (
    <div className='flex flex-wrap bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='max-w-2xl mb-12'>
          <h2 className='text-3xl font-bold tracking-tight text-bluebook sm:text-4xl'>
            Equipo de desarrollo
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'></p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 align-center gap-8'>
          {founders.map((person) => (
            <div
              key={person.name}
              className='card bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300'
            >
              <div className='flex items-center'>
                <img
                  className='h-20 w-20 rounded object-cover mr-5'
                  src={person.imageUrl}
                  alt={person.name}
                />
                <div>
                  <h3 className='text-xl font-semibold leading-7 tracking-tight text-gray-900'>
                    {person.name}
                  </h3>
                  <p className='text-md font-semibold leading-6 text-indigo-600'>
                    {person.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
