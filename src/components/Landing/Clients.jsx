const callouts = [
  {
    name: 'Supermario',
    description: 'Work was done on the economic flow of the video game',
    imageSrc:
      'https://media.tycsports.com/files/2023/05/02/563077/super-mario-bros_862x485.webp?v=4',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'The Last of Us',
    description: 'Work was done on the economic flow of the video game',
    imageSrc:
      'https://hips.hearstapps.com/hmg-prod/images/index-tlou-multi-64146d502ccbc.jpg?crop=0.888888888888889xw:1xh;center,top',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Sonic',
    description: 'Work was done on the economic flow of the video game',
    imageSrc: 'https://i.ytimg.com/vi/X0k6OvkELZw/maxresdefault.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
];

const Clients = () => {
  return (
    <div className='-mt-20'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
          <h2 className='text-2xl uppercase font-bold text-celeste text-center mb-20'>
            Our Clients
          </h2>

          <div className='mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
            {callouts.map((callout) => (
              <div
                key={callout.name}
                className='group font-mont relative text-center'
              >
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
