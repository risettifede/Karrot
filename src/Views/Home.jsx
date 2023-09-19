import React from 'react';
import Nav from '../components/NavBar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='no-scroll-x'>
      <div>
        <Nav />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
