import React, {Component} from 'react';
import "./Mappoint.css";
import { useState,setState,useEffect} from 'react';



function Mappoint(props) {
    const {docname, imgurl} = props;

    const [click, setClick] = useState(true);
    const [modal, setModal] = useState(true);

    
    const handleClick = () => setClick(!click);
    
    const handleTglApp = (event) => {
        this.setState(() =>{
            return {};
        })
    }

    
    const toggleModal = () => {
        setModal(!modal);
    }


    useEffect(() => {
        setModal(true);
    }, []);

    return (
        <div className="modals">
        {modal && <div className="overlay" onClick={toggleModal}>
        <div className="modal-appoint">
            
            <div className="modal-appoint-contents">
                <div className="modal-appoint-top">
                    <div className="avatar1">
                        <img src= ""/>
                    </div>
                    <div className="mtitle">Hello World</div>
                    <div className="icon-container">
                    <div className="xicon" onClick={toggleModal}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                    </div>
                    </div>
                    
                </div>
                <div className="modal-appoint-bottom">
                    <div className="bottom-row">
                        <h1 className="modalsText">
                            Nama Dokter
                        </h1>
                        <h1 className="modalsText">
                            Tanggal Appointment
                        </h1>
                        <h1 className="modalsText">
                            Jam
                        </h1>

                    </div>
                    <div className="bottom-row">
                    <h1 className="modalsText">
                            {docname}
                    </h1>
                    <h1 className="modalsText">
                        <input
                                    className="kalender"
                                     type="date"
                                     onChange={handleTglApp}
                                     name="DateNote" 
                                     style={{ color: "#6e0234" }}
                                     maxLength="1" 
                        />
                    </h1>
                    <div className="modalsDiv">
                    <input
                                    className="jam"
                                     type="time"
                                     onChange={handleTglApp}
                                     name="DateNote" 
                                     style={{ color: "#6e0234" }}
                                     maxLength="1" 
                        />
                    </div>
                    </div>
                </div>

                <div className="modal-foot">
                <button className="btnModal" onClick={toggleModal}>Buat Janji</button >
                </div>
            </div>
        </div>
        </div>}
        </div>
    )
}



export default Mappoint
