import Logo from '../../assets/Logo.png';

const Main = () => {
  return (
    <div className='relative bg-pink justify-center font-press h-[900px] md:h-[700px] lg:h-[1500px] xl:h-[750px] xxl:h-[900px]'>
      <h1 className='text-center'>
        <div className='absolute text-violet text-center text-4xl ml-[125px] mt-[40px] md:ml-[250px] md:mt-[-400px] md:text-6xl '>
          KARROT
        </div>{' '}
        <br />
        <div className='absolute text-xl text-white text-center ml-[70px] mt-[70px] mb-[50px] md:ml-[145px] md:mt-[-350px] md:mb-[10px] md:text-4xl'>
          GAME ECONOMY DESIGN{' '}
        </div>
      </h1>
      <div>
        <p className='absolute text-white text-center font-mont p-[30px] mt-[150px] md:p-[90px] md:text-2xl md:mt-[-250px]'>
          Welcome to Karrot, where we use our expertise in gaming and finance to
          help games and web 3 projects create sustainable and profitable
          virtual economies through our comprehensive tokenomics design
          services.
        </p>
      </div>
      <div className='absolute text-center ml-[134px] mt-[400px] md:ml-[280px] md:mt-[80px]  '>
        <button className='bg-bubble text-center text-white text-lg px-4 py-2 md:text-xl md:px-8 md:py-3'>
          LET'S TALK
        </button>
      </div>
      <div className='scale-90 mt-[500px] ml-[100px] mr-[100px] md:mt-[210px] md:ml-[230px]'>
        <img className='md:h-60 my-36 mr-8' src={Logo} alt='Conejo de Karrot' />
      </div>
    </div>
  );
};

export default Main;
