import NavBar from '../components/NavBar';
import Main from '../components/Landing/Main';
import About from '../components/Landing/About';

const Home = () => {
  return (
    <div className='grid grid-rows-[auto,1fr,auto] h-screen w-full'>
      {/* NavBar section */}
      <header className='w-full'>
        <NavBar />
      </header>

      {/* Main content section */}
      <main className='w-full h-full overflow-y-auto'>
        <Main />
      </main>

      {/* About section */}
      <section className='w-full'>
        <About />
      </section>
    </div>
  );
};

export default Home;
