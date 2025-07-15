import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
};

export default App;