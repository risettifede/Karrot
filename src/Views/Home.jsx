import NavBar from '../components/NavBar';
import About from '../components/Landing/About';
import { Principal } from '../components/Landing/Principal';

const Home = () => {
  return (
    <div className='grid grid-rows-[auto,1fr,auto] h-screen w-full'>
      {/* NavBar section */}
      <header className='w-full'>
        <NavBar />
      </header>

      {/* Main content section */}
      <main className='w-full h-full overflow-y-auto'>
        <Principal />
      </main>

      {/* About section */}
      <section className='w-full'>
        <About />
      </section>
    </div>
  );
};

export default Home;
