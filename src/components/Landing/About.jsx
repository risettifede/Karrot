import Nintendo from '../../assets/Resources/nintendo.png';
import Arrow from '../../assets/Resources/Arrow.png';

const About = () => {
  return (
    <div
      id='about'
      className='relative grid grid-rows-[auto,1fr,auto] gap-6 w-screen h-1/2'
    >
      <h1
        className='text-center text-celeste uppercase self-center text-2xl mx-auto mt-10 
      md:text-4xl 
      lg:text-3xl lg:mt-10
      xxxl:text-3xl'
      >
        About
      </h1>

      <div className='flex flex-col items-center justify-center bg-celeste rounded-xl shadow-2xl p-8 w-3/4 mx-auto z-0 relative'>
        <h2 className='text-xl text-white md:text-2xl lg:text-3xl xl:text-4xl xxxl:text-2xl'>
          OUR VISION
        </h2>

        <p className='text-center text-[13px] font-mont mt-4 text-white md:text-lg lg:text-xl xl:text-2xl xxl:text-xl'>
          Karrot’s vision is to revolutionize the gaming and web 3 industry by
          designing sustainable and profitable virtual economies. We aim to
          create a world where players and developers can thrive together in a
          fair and transparent financial system. Our ultimate goal is to be the
          leading game economy design company, setting the standard for
          innovative and ethical practices in the industry.
        </p>
        <img
          className='hidden xxxl:block absolute top-[81%] left-[89%] w-[60px]
          xxxxl:top-[90%] xxxxl:left-[93%]'
          src={Arrow}
          alt='Descripción de tu imagen'
        />

        <img
          className='mt-4 h-[100px] lg:h-32 xl:h-36 xxl:h-36 xxxl:hidden'
          src={Nintendo}
          alt='Consola nintendo'
        />
      </div>
      <img
        className='absolute hidden xxxl:block xxxl:h-80 xxxl:-ml-[130px] xxxl:-mt-[150px] z-0'
        src={Nintendo}
        alt='Nintendo'
      />
    </div>
  );
};

export default About;
