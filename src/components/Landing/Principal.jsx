import Logo from '../../assets/Logo.png';

const Principal = () => {
  return (
    <div className='w-screen h-screen grid grid-rows-[auto,1fr,auto] bg-pink font-press items-center justify-items-center p-5'>
      {/* Header */}
      <header className='text-center space-y-4'>
        <h1 className='text-violet text-4xl mt-16 md:text-6xl lg:text-7xl xl:text-8xl'>
          KARROT
        </h1>
        <h2 className='text-3xl text-white md:text-4xl lg:text-5xl'>
          GAME ECONOMY DESIGN
        </h2>
      </header>

      {/* Main Content */}
      <main className='text-white text-center text-lg font-mont space-y-2 p-4'>
        <p className='md:text-3xl lg:text-4xl'>
          Welcome to Karrot, where we use our expertise in gaming and finance to
          help games and web 3 projects create sustainable and profitable
          virtual economies through our comprehensive tokenomics design
          services.
        </p>
      </main>

      {/* Footer */}
      <footer className='text-center space-y-8'>
        <button className='bg-bubble shadow-xl text-white text-lg px-4 py-2 md:text-xl md:px-8 md:py-3 lg:px-12 lg:py-4 lg:text-3xl'>
          LET’S TALK
        </button>
        <img
          className='h-40 md:h-60 lg:h-80 xl:h-28 xl:mr-[990px] xxl:mr-[1100px]'
          src={Logo}
          alt='Conejo de Karrot'
        />
      </footer>
    </div>
  );
};

export default Principal;
