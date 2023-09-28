import Logo from '../../assets/Icons/Logo.png';

const Main = () => {
  return (
    <div className='w-screen h-screen grid grid-rows-[auto,1fr,auto] bg-pink items-center justify-items-center p-5 relative z-20'>
      {/* Header */}
      <header
        className='text-center space-y-4 
      md:mt-10 
      lg:mt-20 
      xl:mt-20'
      >
        <h1
          className='text-violet text-4xl mt-16 
        md:text-4xl md:mt-6 
        lg:text-7xl 
        xl:text-7xl 
        xxl:text-7xl'
        >
          KARROT
        </h1>
        <h2
          className='text-xl text-white 
        md:text-3xl 
        lg:text-4xl 
        xl:text-4xl 
        xxl:text-5xl'
        >
          GAME ECONOMY DESIGN
        </h2>
      </header>

      {/* Main Content */}
      <main className='text-white text-center text-md space-y-4 p-5'>
        <p
          className='-mt-12
        md:text-xl 
        lg:text-2xl lg:mt-10 
        xl:text-2xl xl:-mt-12
        xxl:text-3xl xxl:-mt-12
        xxxl:text-3xl xxxl:mt-10'
        >
          Welcome to Karrot, where we use our expertise in gaming and finance to
          help games and web 3 projects create sustainable and profitable
          virtual economies through our comprehensive tokenomics design
          services.
        </p>
      </main>

      {/* Footer */}
      <footer
        className='text-center space-y-20 mb-12 
      xxl:mb-1
      '
      >
        <button
          className='bg-bubble shadow-xl text-white text-lg px-4 py-2 
        md:text-xl md:px-8 md:py-3 
        lg:hidden'
        >
          LET’S TALK
        </button>
        <button
          className='bg-bubble mx-auto shadow-xl text-white px-4 py-2 hidden 
        lg:block lg:px-6 lg:py-2 lg:text-xl
        '
        >
          LEARN MORE
        </button>
      </footer>
      <img
        className='h-32 mx-auto 
          md:h-48 md:py-6 
          lg:h-64 
          xl:h-40 xl:mr-[990px] 
          xxl:mr-[1100px] xxl:-mt-2
          xxxl:mr-[1100px] xxxl:-mt-6
          '
        src={Logo}
        alt='Conejo de Karrot'
      />
    </div>
  );
};

export default Main;
