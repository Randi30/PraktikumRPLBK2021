import react from 'react';
import logo from './logo.svg';
import reactDom from 'react-dom';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './assets/vendor/animate/animate.css';
import React from 'react';
import DoctorList from './components/DoctorList';
import HeroSection from './components/HeroSection';

import Mappoint from './components/Mappoint';

function App() {
  return (
<>

<Router>
<Navbar/>
<HeroSection />
<DoctorList/>
</Router>
    

</>
  );
}

export default App;
