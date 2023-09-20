import Logo from '../../assets/Logo.png';

const Main = () => {
  return (
    <div className='relative bg-pink justify-center font-press h-[900px] md:h-[900px] md:w-[768px] lg:h-[1500px] xl:h-[750px] xxl:h-[900px]'>
      <h1 className='text-center'>
        <div className='absolute text-violet text-center text-4xl ml-[125px] mt-[40px] md:ml-[310px] md:mt-[-400px]  '>
          KARROT
        </div>{' '}
        <br />
        <div className='absolute text-center ml-[70px] mt-[100px] mb-[50px] text-white text-xl'>
          GAME ECONOMY DESIGN{' '}
        </div>
      </h1>
      <div>
        <p className='absolute text-white text-center font-mont p-[30px] mt-[150px] md:h-[950px] lg:h-[1500px] xl:h-[750px] xxl:h-[900px]'>
          Welcome to Karrot, where we use our expertise in gaming and finance to
          help games and web 3 projects create sustainable and profitable
          virtual economies through our comprehensive tokenomics design
          services.
        </p>
      </div>
      <div className='absolute ml-[134px] mt-[400px] text-center'>
        <button className='bg-bubble text-center text-white'>LET'S TALK</button>
      </div>
      <div className='scale-90 mt-[500px] ml-[100px] mr-[100px]'>
        <img className='md:h-80 my-36 mr-8' src={Logo} alt='Conejo de Karrot' />
      </div>
    </div>
  );
};

export default Main;
