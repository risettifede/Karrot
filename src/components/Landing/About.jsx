import Nintendo from '../../assets/nintendo.png';

const About = () => {
  return (
    <div className='grid grid-rows-[auto,1fr,auto] gap-4 w-screen h-screen font-mont'>
      {/* Header - About */}
      <h1 className='text-center self-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
        ABOUT
      </h1>

      {/* Main content */}
      <div className='grid place-items-center bg-celeste rounded-xl shadow-2xl p-6 w-3/4 mx-auto'>
        <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white'>
          OUR VISION
        </h2>

        <p className='text-center text-lg p-2 mt-3 md:text-lg lg:text-xl xl:text-2xl text-white'>
          Karrot’s vision is to revolutionize the gaming and web 3 industry by
          designing sustainable and profitable virtual economies. We aim to
          create a world where players and developers can thrive together in a
          fair and transparent financial system. Our ultimate goal is to be the
          leading game economy design company, setting the standard for
          innovative and ethical practices in the industry.
        </p>

        {/* Image Container */}
        <div className='place-self-center mt-6'>
          <img
            className='h-32 md:h-48 lg:h-[330px]'
            src={Nintendo}
            alt='Consola nintendo'
          />
        </div>
      </div>

      {/* Potential additional content or padding */}
      <div></div>
    </div>
  );
};

export default About;
