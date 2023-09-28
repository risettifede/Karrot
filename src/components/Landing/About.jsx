import Nintendo from '../../assets/Resources/nintendo.png';

const About = () => {
  return (
    <div className='relative grid grid-rows-[auto,1fr,auto] gap-6 w-screen h-1/2'>
      {/* Header - About */}
      <h1
        className='text-center uppercase self-center text-2xl mx-auto mt-4 
      md:text-4xl 
      lg:text-5xl lg:mt-10
      xl:text-5xl xl:mt-12
      xxxl:text-3xl
      '
      >
        About
      </h1>

      {/* Main content */}
      <div className='grid place-items-center bg-celeste rounded-xl shadow-2xl p-8 w-3/4 mx-auto z-10'>
        <h2
          className='text-xl mx-auto text-white
         md:text-2xl 
         lg:text-3xl 
         xl:text-4xl
         xxxl:text-3xl'
        >
          OUR VISION
        </h2>
        <div className=''>
          <p
            className='text-center text-[13px] mx-auto mt-4 text-white
          md:text-lg 
          lg:text-xl 
          xl:text-2xl
          xxl:text-xl
          '
          >
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
        className='absolute h-[100px] mt-[416px] ml-[120px] z-10
        xxxs:mt-[400px] xxxs:ml-[140px] xxxs:h-20
        xxs:mt-[400px] xxs:ml-[140px] xxs:h-20
        xs:mt-[400px] xs:ml-[145px] xs:h-20
        ssm:mt-[380px] ssm:ml-[145px] ssm:h-24
        sm:mt-[380px] sm:ml-[145px] sm:h-24
        mmd:mt-[380px] mmd:ml-[160px] mmd:h-24
        md:mt-[600px] md:ml-[140px] md:h-32
        lg:mt-[440px] lg:ml-[290px] lg:h-32
        xl:mt-[500px] xl:ml-[300px] xl:h-36
        xxl:mt-[400px] xxl:ml-[410px] xxl:h-36
        xxxl:-mt-[145px] xxxl:-ml-[130px] xxxl:h-80
        '
        src={Nintendo}
        alt='Consola nintendo'
      />

      {/* Potential additional content or padding */}
      <div></div>
    </div>
  );
};

export default About;
