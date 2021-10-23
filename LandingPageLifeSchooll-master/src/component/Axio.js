// import { Fragment, useState, useEffect } from "react";
// import { React } from "react";
// import axios from "axios";
// import "../App.css";
// import "../";

// import "../App.css";

// export default function Axio() {
//   const { dapuq, setDapuq } = useState(false);
//   const [loading, setLoading] = useState(false);
//   setLoading(true);

//   useEffect(() => {
//     axios({
//       method: "get",
//       url: "http://localhost:3000/users",
//       headers: {
//         accept: "/",
//       },
//     })
//       .then((data) => {
//         console.log("data", data.data);
//         setDapuq(data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   if (loading) {
//     return <p>Loading Data...</p>;
//   }
//   return (
//     <Fragment>
//       <h2>Random Post</h2>
//       <div className="conta-card font-fams">
//         {dapuq.map(({ id, username, password, email }) => {
//           return (
//             <div className="card-margin">
//               <div className="box-card" key={id} onClick={() => alert("hao")}>
//                 <h1 className="title-card">Card Name</h1>
//                 <h2>{username}</h2>
//                 <p>{email}</p>
//                 <p>{password}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </Fragment>
//   );
// }

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import ReactModal from "react-modal";
import "../../src/App.css";

export default function Modal() {
  const [modalOpen, setModalOpen] = useState(false);
  // Set the State Hooks
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState([]); //Masalah nya ada di array ga keisi

  // Make function to call the api
  async function fetchData() {
    try {
      const res = await Axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setData(res.data);
    } catch (error) {
      setErrors(error.ressponse.data);
      alert(hasError.toString());
    }
  }

  useEffect(() => {
    fetchData();
  });
  console.log(data);
  return (
    <div>
      {/* {data.map((data) => ( */}
      <div>
        <ReactModal
          isOpen={modalOpen}
          shouldCloseOnOverlayClick={false}
          onRequestClose={() => setModalOpen(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(25,24,24,0.8)",
            },
            content: {
              color: "blue",
              outline: "none",
              borderRadius: "10px",
              width: "30%",
              margin: "0px",
              position: "relative",
              left: "35%",
              top: "25%",
              transition: "ease-in",
            },
          }}
        >
          <ListGroup>
            <ListGroupItem active disabled tag="a" action>
              Biodata Dari <span>{data.name}</span>
            </ListGroupItem>
            <ListGroupItem tag="a" action>
              Nama : {data.name}
            </ListGroupItem>
            <ListGroupItem tag="a" action>
              Username : {data.username}
            </ListGroupItem>
            <ListGroupItem tag="a" action>
              Email : {data.email}
            </ListGroupItem>
            <ListGroupItem tag="a" action>
              Nomor : {data.phone}
            </ListGroupItem>
            <ListGroupItem tag="a" action>
              Website : {data.website}
            </ListGroupItem>
            <ListGroupItem tag="a" action></ListGroupItem>
          </ListGroup>

          <Button color="warning" onClick={() => setModalOpen(false)}>
            CLOSE
          </Button>
        </ReactModal>
        {/* <div> */}
        {/* <Button color="danger" onClick={() => setModalOpen(true)}>
            {data.email} */}
        {/* {data.map(({ id, name, username }) => (
              <div key={id}>
                <p>{name}</p>
                <p>{username}</p>
              </div>
              
            ))} */}
        {/* {data.forEach((value) => {
              <div key={value.id}>
                <p>{value.name}</p>
                <p>{value.username}</p>
              </div>;
            })} */}
        {/* </Button> */}
        {data.forEach((value) => {
          <div key={value.id}>
            <p>{value.name}</p>
            <p>{value.username}</p>
          </div>;
        })}
        {/* </div> */}
      </div>
      {/* ))} */}
    </div>
  );
}
