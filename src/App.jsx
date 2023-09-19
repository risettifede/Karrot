import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<NavBar />}></Route>
        <Route path='/' element={<Footer />}></Route>
      </Routes>
    </div>
  );
};

export default App;
