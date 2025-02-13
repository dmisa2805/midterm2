import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Home from './components/Home';


function App() {
  return (
    <div className='bg-primary h-full w-full m-0'>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;