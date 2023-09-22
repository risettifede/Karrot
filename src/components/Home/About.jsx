import React from 'react';

const About = () => {
  return (
    <div
      className={`w-screen 
      h-[800px] 
      md:h-[1000px] 
      lg:h-[1366px] 
      xl:h-[610px] 
      xxl:h-[600px] font-mont`}
    >
      <div className='text-center'>
        <h1
          className='text-center justify-center h-12 p-6 text-2xl
        md:text-3xl
        lg:text-4xl
        xl:text-5xl
        xxl:text-6xl'
        >
          ABOUT
        </h1>
      </div>
      <div className='flex justify-center items-center h-screen'>
        <div
          className='bg-celeste text-center text-white rounded-xl shadow-2xl p-6 
                  w-[325px] h-[600px] -mt-48
                  md:w-[670px] md:h-[330px] md:text-2xl md:-mt-[510px]
                  lg:w-[830px] lg:h-[400px] lg:text-3xl lg:-mt-[700px]
                  xl:w-[1100px] xl:h-[320px] xl:text-4xl xl:-mt-[200px]
                  xxl:w-[1100px]'
        >
          OUR VISION
          <div
            className='text-center text-md p-2 justify-center mt-3 
                    md:text-lg 
                    lg:text-xl
                    xl:text-2xl xl:mt-6'
          >
            Karrot’s vision is to revolutionize the gaming and web 3 industry by
            designing sustainable and profitable virtual economies. We aim to
            create a world where players and developers can thrive together in a
            fair and transparent financial system. Our ultimate goal is to be
            the leading game economy design company, setting the standard for
            innovative and ethical practices in the industry.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
