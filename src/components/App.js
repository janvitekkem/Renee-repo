import React from 'react';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Test from '../Pages/Test';
import Connect from '../Pages/Connect';
import Consult from '../Pages/Consult';
import Reg from '../Pages/Reg';
import Navbar from './Navbar';
import './cssfiles/App.css';
import Footer from './Footer.js'

function App() {
  return (
    <div className="container">
      <Router>
      <Navbar className="navi"/>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/test" element={<Test />}/> 
      {/* <Route path="/connect" element={<Connect />}/> */}
      <Route path="/consult" element={<Consult />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/reg" element={<Reg />}/>     
      </Routes>
      </Router> 
      <Footer/>
    </div>
  );
}

export default App;