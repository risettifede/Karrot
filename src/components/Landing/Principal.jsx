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
          className='text-violet font-press text-4xl mt-16 
        md:text-4xl md:mt-6 
        lg:text-5xl lg:mt-28
        xl:text-5xl 
        xxl:text-5xl'
        >
          KARROT
        </h1>
        <h2
          className='text-xl text-white 
        md:text-3xl 
        lg:text-3xl 
        xl:text-4xl 
        xxl:text-3xl'
        >
          GAME ECONOMY DESIGN
        </h2>
      </header>

      {/* Main Content */}
      <main className='text-white text-center text-md space-y-4 p-5 font-mont'>
        <p
          className='-mt-12
        md:text-xl 
        lg:text-2xl lg:mt-10 
        xl:text-2xl xl:-mt-12
        xxl:text-2xl xxl:-mt-12
        xxxl:text-xl xxxl:mt-10'
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
        <a
          href='#formulario'
          className='bg-bubble shadow-xl text-white px-4 py-2 
        md:text-xl md:px-8 md:py-3 
        lg:hidden'
        >
          LET`S TALK
        </a>
        <a
          href='#formulario'
          className='bg-bubble mx-auto shadow-xl text-white px-4 py-2 hidden 
    lg:block lg:px-6 lg:py-2 lg:text-sm xl:hover:shadow-xl xl:hover:scale-105 xl:transition-all xl:duration-300 scroll-smooth'
        >
          LEARN MORE
        </a>
      </footer>
      <img
        className='h-32 mx-auto
          md:h-48 md:py-6 
          lg:h-64 
          xl:h-40 xl:mr-[990px]
          xxl:mr-[1100px] xxl:-mt-2
          xxxl:mr-[1300px] xxxl:-mt-6
          '
        src={Logo}
        alt='Conejo de Karrot'
      />
    </div>
  );
};

export default Main;
