import React from 'react'
import { Button } from './Button';
import "./DoctorCard.css"
import { useState, useEffect } from 'react';

import '../Maicons.css';
import '../theme.css';
import '../bootstrap.css';
import '../assets/vendor/animate/animate.css';



function DoctorCard(props) {
    const {docname, field, image} = props;

    const [Over, setOver] = useState(false);
    const [button, setButton] = useState(true);

    


    
        return (
       
        <div className="item">
          <div className="card-doctor">
            <div className="header"> 
                <img 
                src={image}
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

            {button && <Button buttonStyle='btn--primary'>Make Appointment</Button>}
          </div>
          </div>
        
    )
}

export default DoctorCard
