import React from 'react';
import { callouts } from '../Data/Clients';

const Clients = () => {
  return (
    <div className='-mt-20'>
      <div className='mx-auto max-w-7xl mt-10 mb-4 px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
          <h2 className='text-xl uppercase font-bold text-celeste text-center mb-20'>
            Our Clients
          </h2>
          <div className='space-y-8 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
            {callouts.map((callout) => (
              <div
                key={callout.name}
                className='group font-mont relative text-center '
              >
                <a
                  href={callout.href}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='relative h-48 w-full overflow-hidden rounded-lg transition duration-300 bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64'>
                    <img
                      src={callout.image}
                      alt={callout.alt}
                      className='h-full w-full object-cover object-center'
                    />
                  </div>
                </a>
                <h3 className='mt-6 text-xl text-bold'>
                  <a
                    href={callout.href}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
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
