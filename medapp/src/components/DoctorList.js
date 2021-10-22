import React from 'react'

import DoctorCard from './DoctorCard'
import Gambar1 from "../assets/img/doctors/doctor_1.jpg"

import '../Maicons.css';
import '../theme.css';
import '../bootstrap.css';
import '../assets/vendor/animate/animate.css';
import '../assets/vendor/owl-carousel/css/owl.carousel.css';
import { Component } from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';


export default class DoctorList extends Component{

    constructor(props){
        super(props)
            this.state = {
                DoctorList:[],
                visible: false,
            };
    }

    componentDidMount(){
        axios({
            method: "get",
            url:"http://localhost:3000/doc",
            headers:{
                accept: "*/*"
            },
        })
        
            .then((data) => {
                console.log(data.data);
                this.setState({
                    DoctorList: data.data,
                });
            })

            .catch((error) => {
                console.log(error);
            });
    }

    render() {
    return (
        <>
        <div className="page-section" >
            <div className="container">
                <h1 className="text-center">Doktor Kami</h1>
                <div class="list-doctor">
                {this.state.DoctorList.map((results, index) => {
                    return(
                        <DoctorCard 
                        docname={results.name}
                        field={results.field}
                        image={results.gambar}
                        />
                    )
                })}
                </div>
                
            </div>
        </div>     
        </>
    )
}
}

