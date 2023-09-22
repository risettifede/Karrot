import NavBar from '../components/NavBar';
import Main from '../components/Home/Main';

const Home = () => {
  return (
    <div className='bg-pink no-scroll-x'>
      <div className='w-screen h-[70px] md:h-[400px] lg:h-[400px] my-1 md:-my-36 flex justify-center items-end'>
        <NavBar />
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
};

export default Home;
