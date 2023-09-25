import NavBar from '../components/NavBar';
import About from '../components/Landing/About';
import Main from '../components/Landing/Principal';
import Form from '../components/Landing/Form';

const Home = () => {
  return (
    <div className='grid grid-rows-[auto,1fr,auto] h-screen w-screen'>
      {/* NavBar section */}
      <header className='w-full'>
        <NavBar />
      </header>

      {/* Main content section */}
      <main className='w-screen h-screen'>
        <Main />
      </main>

      {/* About section */}
      <section className='w-screen'>
        <About />
      </section>

      {/* Form section */}
      <section className='w-screen'>
        <Form />
      </section>
    </div>
  );
};

export default Home;
