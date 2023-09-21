import Logo from '../../assets/Logo.png';

const Main = () => {
  return (
    <div className='w-screen h-[800px] md:h-[768px] lg:h-[1024px] xl:h-[1280px] xxl:h-[1440px] grid grid-rows-[auto,1fr,auto] bg-pink font-press items-center justify-items-center'>
      <div className='text-center'>
        <h1 className='text-violet text-4xl md:text-6xl md:-mt-96 lg:text-8xl lg:-mt-48'>
          KARROT
        </h1>
        <h2 className='text-xl mt-4 -mb-48 text-white md:text-4xl md:p-6 md:mt-2 lg:text-5xl lg:-mb-96'>
          GAME ECONOMY DESIGN
        </h2>
      </div>
      <p className='text-white text-center font-mont p-16 mt-12 md:text-2xl md:-mt-80 lg:text-4xl lg:p-16 lg:-mt-[400px]'>
        Welcome to Karrot, where we use our expertise in gaming and finance to
        help games and web 3 projects create sustainable and profitable virtual
        economies through our comprehensive tokenomics design services.
      </p>
      <div className='relative space-y-8 text-center mb-32 -mt-4 md:mb-[200px] md:-mt-12 lg:mb-[100px] lg:-mt-96'>
        <div>
          <button className='bg-bubble text-center shadow-xl text-white text-lg px-4 py-2 mb-12 md:text-xl md:px-8 md:py-3 lg:px-16 lg:py-6 lg:text-4xl'>
            LET'S TALK
          </button>
          <img
            className='h-40 md:h-60 md:mt-28 lg:h-80'
            src={Logo}
            alt='Conejo de Karrot'
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
