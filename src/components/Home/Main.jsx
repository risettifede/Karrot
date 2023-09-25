import Logo from '../../assets/Logo.png';

const Main = () => {
  return (
    <div
      className='w-screen no-scroll-x grid grid-rows-[auto,1fr,auto] bg-pink font-press items-center justify-items-center
    h-[844px] 
    md:h-[1000px] 
    lg:h-[1366px] 
    xl:h-[610px] 
    xxl:h-[1000px] '
    >
      <div className='text-center'>
        <h1
          className='text-violet text-4xl mt-5 
        md:text-6xl 
        lg:text-7xl lg:mt-28 
        xl:text-8xl xl:mt-8 
        xxl:text-8xl xxl:mt-12'
        >
          KARROT
        </h1>
        <h2
          className='text-xl mt-4 -mb-48 text-white 
        md:text-4xl md:p-6 
        lg:text-5xl lg:-mb-96 
        xl:-mt-4 '
        >
          GAME ECONOMY DESIGN
        </h2>
      </div>
      <p
        className='text-white text-center font-mont p-8 mt-12 
      md:text-3xl md:mt-48 md:p-10 
      lg:text-4xl lg:p-16 lg:-mt-28 
      xl:text-3xl xl:mt-8 
      xxl:-mt-6'
      >
        Welcome to Karrot, where we use our expertise in gaming and finance to
        help games and web 3 projects create sustainable and profitable virtual
        economies through our comprehensive tokenomics design services.
      </p>
      <div
        className='relative space-y-8 text-center mb-32 -mt-4 
      md:mb-[200px] md:mt-12 
      lg:mb-[100px] lg:-mt-96 
      xxl:-mb-20'
      >
        <button
          className='bg-bubble text-center shadow-xl text-white text-lg px-4 py-2 mb-20 
        md:text-xl md:px-8 md:py-3 
        lg:px-12 lg:py-4 lg:text-3xl 
        xl:hidden xxl:hidden'
        >
          LET’S TALK
        </button>
        <img
          className='h-40 md:h-60 md:mt-28 lg:h-80 lg:mt-96 xl:h-28 xl:mr-[999px] xxl:mr-[1200px] xxl:h-32'
          src={Logo}
          alt='Conejo de Karrot'
        />
      </div>
    </div>
  );
};

export default Main;
