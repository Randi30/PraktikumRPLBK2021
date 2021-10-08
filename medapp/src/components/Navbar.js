import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';

import '../Maicons.css';
import '../theme.css';
import '../bootstrap.css';
import '../assets/vendor/animate/animate.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    <div className="topbar">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 text-sm">
            <div class="site-info">
              <a href="#"><span class="mai-call text-primary"></span> +621 5687-8898-2415</a>
              <span class="divider">|</span>
              <a href="#"><span class="mai-mail text-primary"></span> mail@MediApp.UnitedHealth.com</a>
            </div>
          </div>

          <div class="col-sm-4 text-right text-sm">
            <div class="social-mini-button">
              <a href="#"><span class="mai-logo-facebook-f"></span></a>
              <a href="#"><span class="mai-logo-twitter"></span></a>
              <a href="#"><span class="mai-logo-dribbble"></span></a>
              <a href="#"><span class="mai-logo-instagram"></span></a>
            </div>
          </div>
        </div>
      </div> 
    </div> 

      <nav className='navbar navbar-expand-lg navbar-light shadow-sm'>
        <div className='container'>
        <a className='navbar-brand' href="#">
          <Link to='/'  onClick={closeMobileMenu}>
          <span className="text-primary">MEDi</span>-App
            <i className='fas fa-heartbeat' />
          </Link>
          </a>

        <form action="#">
          <div className="input-group input-navbar">
            <div className="input-group-prepend">
              <span className="input-group-text" id="icon-addon1"><span class="mai-search"></span></span>
            </div>
            <input type="text" class="form-control" placeholder="Enter keyword.." aria-label="Username" aria-describedby="icon-addon1">
            </input>
            </div>
        </form>


          <div className='navbar-toggler' onClick={handleClick}>
            <i className={click ?  'navbar-toggler-icon' : 'fas fa-times'} />
          </div>

          <div id="navbarSupport" className={click ? 'navbar-collapse collapse': "navbar-collapse collapse show"} >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link  to='/'><a className="nav-link" >Home</a></Link>
            </li>
            <li className="nav-item">
            <Link  to='/'>
              <a className="nav-link">About Us</a>
            </Link>
            </li>
            <li className="nav-item">
            <Link  to='/'>
              <a className="nav-link" >Doctors</a>
            </Link>
            </li>
            
            <li className="nav-item">
            <Link  to='/'>
              <a className="nav-link" >Contact</a>
            </Link>
            </li>
            <li className="nav-item">
            <Link  to='/'>
              <a className="btn btn-primary ml-lg-3" href="#">Login / Register</a>
            </Link>
            </li>
          </ul>
        </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;