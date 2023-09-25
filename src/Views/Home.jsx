import NavBar from '../components/NavBar';
import Main from '../components/Home/Main';
import About from '../components/Home/About';

const Home = () => {
  return (
    <div className=''>
      <div className='w-screen h-[30px] md:h-[400px] lg:h-[400px] xxl:h-[38px] my-1 md:-my-36 flex justify-center items-end'>
        <NavBar />
      </div>
      <div className='w-screen h-screen'>
        <Main />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
};

export default Home;
