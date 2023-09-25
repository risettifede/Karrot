import Nintendo from '../../assets/nintendo.png';

const About = () => {
  return (
    <div className='relative grid grid-rows-[auto,1fr,auto] gap-4 w-screen h-screen font-mont'>
      {/* Header - About */}
      <h1 className='text-center self-center text-3xl mx-auto mt-4 md:text-4xl lg:text-5xl xl:text-6xl'>
        ABOUT
      </h1>

      {/* Main content */}
      <div className='grid place-items-center bg-celeste rounded-xl shadow-2xl p-6 w-3/4 h-2/ mx-auto z-10'>
        <h2 className='text-xl mx-auto md:text-2xl lg:text-3xl xl:text-4xl text-white'>
          OUR VISION
        </h2>
        <div className='bg-yellow-100 -mt-[600px]'>
          <p className='text-center text-lg p-2 mx-auto md:text-lg lg:text-xl xl:text-2xl text-white'>
            Karrot’s vision is to revolutionize the gaming and web 3 industry by
            designing sustainable and profitable virtual economies. We aim to
            create a world where players and developers can thrive together in a
            fair and transparent financial system. Our ultimate goal is to be
            the leading game economy design company, setting the standard for
            innovative and ethical practices in the industry.
          </p>
        </div>
      </div>

      {/* Image Container */}
      <img
        className='absolute h-28 lg:h-40 z-20'
        src={Nintendo}
        alt='Consola nintendo'
      />

      {/* Potential additional content or padding */}
      <div></div>
    </div>
  );
};

export default About;
