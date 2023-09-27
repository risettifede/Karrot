import NavBar from '../components/NavBar';
import About from '../components/Landing/About';
import Main from '../components/Landing/Principal';
import Form from '../components/Landing/Form';
import Team from '../components/Landing/Team';
import Clients from '../components/Landing/Clients';
import Services from '../components/Landing/Services';
import Footer from '../components/Footer';

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

      {/* Services section */}
      <section className='w-screen'>
        <Services />
      </section>

      {/* Team section */}
      <section className='w-screen'>
        <Team />
      </section>

      {/* Clients section */}
      <section className='w-screen'>
        <Clients />
      </section>

      {/* Form section */}
      <section className='w-screen'>
        <Form />
      </section>

      {/* Footer section */}
      <section className='w-screen'>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
