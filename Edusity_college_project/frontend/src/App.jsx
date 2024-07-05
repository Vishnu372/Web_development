import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import './App.css';

const App = () => {
  const [playState, setPlayState] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <Router>
      {showNavbar && <Navbar />}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <div className="container">
                <Title subTitle="Our PROGRAM" title="What We Offer" />
                <Programs />
                <About setPlayState={setPlayState} />
                <Title subTitle="Gallery" title="Campus photos" />
                <Campus />
                <Title subTitle="TESTIMONIALS" title="What Student Says" />
                <Testimonials />
                <Title subTitle="Contact Us" title="Get in Touch" />
                <Contact />
                <Footer />
              </div>
              <VideoPlayer playState={playState} setPlayState={setPlayState} />
            </>
          }
        />
        <Route 
          path="/register/:program" 
          element={<RegistrationForm setShowNavbar={setShowNavbar} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
