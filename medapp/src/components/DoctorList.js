import React from 'react'

import DoctorCard from './DoctorCard'
import Gambar from "../assets/img/doctors/doctor_1.jpg"

import '../Maicons.css';
import '../theme.css';
import '../bootstrap.css';
import '../assets/vendor/animate/animate.css';
import '../assets/vendor/owl-carousel/css/owl.carousel.css';


function DoctorList() {
    return (
        <>
        <div className="page-section">
            <div className="doc-container">
                <h1 className="text-center">Doktor Kami</h1>

                    <DoctorCard 
                    docname="Uraka"
                    field="Urosti"
                    image={Gambar}
                    />
                    <DoctorCard 
                    docname="Suyaa"
                    field="Brrrh"
                    image={Gambar}
                    />

            </div>

            
        </div>
        
        </>
    )
}

export default DoctorList
