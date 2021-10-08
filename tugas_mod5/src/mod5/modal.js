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
  const [data, setData] = useState({});

  // Make function to call the api
  async function fetchData() {
    try {
      const res = await Axios.get(
        "https://jsonplaceholder.typicode.com/users/2"
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
        <div>
          <Button color="danger" onClick={() => setModalOpen(true)}>
            {data.name}
          </Button>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}
