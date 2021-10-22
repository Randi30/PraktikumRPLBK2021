import React from 'react'
import { Button } from './Button';
import "./DoctorCard.css"
import { useState, useEffect,setState } from 'react';

import '../Maicons.css';
import '../theme.css';
import '../bootstrap.css';
import '../assets/vendor/animate/animate.css';
import Mappoint from './Mappoint';
import { Switch } from 'react-router';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { render } from '@testing-library/react';





function DoctorCard(props) {
    const {docname, field, image} = props;
    const [button, showMod] = useState(false);
    
    const showModal = () => {
        showMod(true);
    };

        return (
        <div className="item">
          <div className="card-doctor">
            <div className="header"> 
                <img 
                src={process.env.PUBLIC_URL + image}
                alt="Gambar"
                className="card-img"
                />
                <div class="meta">
                <a href="#"><span class="mai-call"></span></a>
                <a href="#"><span class="mai-logo-whatsapp"></span></a>
              </div>

            </div>

            <div class="body-text">
              <p class="text-x1 mb-0">{docname}</p>
              <span class="text-sm text-grey">{field}</span>
            </div>

            <Button buttonStyle='btn--primary' onClick={showModal}>Make Appointment</Button>
            {button && <BrowserRouter> <Route><Mappoint docname = {docname} imgurl = {image}/></Route></BrowserRouter>}
          </div>
          </div>

    )
}

export default DoctorCard
