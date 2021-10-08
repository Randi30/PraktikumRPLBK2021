import react from 'react';
import logo from './logo.svg';
import reactDom from 'react-dom';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import './assets/vendor/animate/animate.css';
import React from 'react';
import DoctorList from './components/DoctorList';

function App() {
  return (
<>

<Router>
<Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
      <DoctorList/>
    </Router>
    

</>
  );
}

export default App;
