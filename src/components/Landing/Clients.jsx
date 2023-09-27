const callouts = [
  {
    name: 'Videogames',
    description: 'Work was done on the economic flow of the video game',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Xbox_app_logo.svg/2048px-Xbox_app_logo.svg.png',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Videogames',
    description: 'Work was done on the economic flow of the video game',
    imageSrc: 'https://xgp.pl/wp-content/uploads/2022/08/sony-playstation.jpg',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Videogames',
    description: 'Work was done on the economic flow of the video game',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Nintendo_Switch_logo%2C_square.png/768px-Nintendo_Switch_logo%2C_square.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
];

const Clients = () => {
  return (
    <div className='-mt-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
          <h2 className='text-2xl uppercase font-bold text-gray-900 text-center mb-20'>
            Our Clients
          </h2>

          <div className='mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
            {callouts.map((callout) => (
              <div key={callout.name} className='group relative text-center'>
                <div className='relative h-48 w-full overflow-hidden rounded-lg transition duration-300 bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64'>
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className='h-full w-full object-cover object-center'
                  />
                </div>
                <h3 className='mt-6 text-xl text-bold'>
                  <a href={callout.href}>
                    <span className='absolute inset-0' />
                    {callout.name}
                  </a>
                </h3>
                <p className='font-semibold'>{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
