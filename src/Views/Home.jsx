import NavBar from '../components/NavBar';
import Main from '../components/Home/Main';

const Home = () => {
  return (
    <div className='bg-pink no-scroll-x'>
      <div className='h-[100px] md:h-[768px] xl:h-[920px] my-1 md:-my-36 xl:my-5 flex justify-center items-end'>
        <NavBar />
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
};

export default Home;
