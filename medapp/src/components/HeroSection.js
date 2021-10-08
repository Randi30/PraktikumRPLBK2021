import React from 'react'
import './HeroSection.css'
import { Link } from 'react-router-dom';
import '../Maicons.css';
import '../theme.css';
import { Button } from './Button';
import '../App.css';
import '../bootstrap.css';
import '../assets/vendor/animate/animate.css';

function HeroSection() {
    return (
        <div className='page-hero bg-image overlay-dark' >
            <div class="hero-section">
                <div class="container text-center wow zoomIn">
                <span class="subhead">Let's make your life happier</span>
                <h1 class="display-4">Healthy Living</h1>
                <a href="#" class="btn btn-primary">Let's Consult</a>
            </div>
         </div>
        </div>
    );
}

export default HeroSection
