// import React from 'react';
import { callouts } from '../Data/Clients';

const Clients = () => {
  return (
    <div className='-mt-20 lg:-mt-40'>
      <div className='mx-auto max-w-7xl mt-10 mb-4 px-4 lg:px-8'>
        <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
          <h2 className='text-xl uppercase font-bold text-celeste text-center mb-20 lg:text-2xl xxxl:text-3xl'>
            Our Clients
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-2 xxxl:grid-cols-2 gap-4 '>
            {callouts.map((callout) => (
              <div
                key={callout.name}
                className='font-mont border rounded overflow-hidden shadow-md bg-gray-100'
              >
                <a
                  href={callout.href}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    className='w-full h-48 object-cover'
                    src={callout.image}
                    alt={callout.alt}
                  />
                </a>

                <div className='p-4'>
                  <h3 className='text-xl font-bold mb-2'>{callout.name}</h3>
                  <p className='text-gray-700'>{callout.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
