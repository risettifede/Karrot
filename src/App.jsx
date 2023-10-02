// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Views/Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default App;
