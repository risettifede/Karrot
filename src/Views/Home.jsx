import React from 'react';
import NavBar from '../components/NavBar';
import About from '../components/Home/About';

const Home = () => {
  return (
    <div className='no-scroll-x'>
      <div className='no-scroll-x'>
        <NavBar />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
};

export default Home;
