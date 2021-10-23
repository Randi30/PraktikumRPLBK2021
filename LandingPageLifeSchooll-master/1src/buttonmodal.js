// import React, { useState, useEffect } from "react";
// import {
//   Button,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Card,
//   CardTitle,
//   CardText,
//   Row,
//   Col,
// } from "reactstrap";

// const ModalExample = (props) => {
//   const { buttonLabel, className } = props;

//   const [modal, setModal] = useState(false);
//   const [nestedModal, setNestedModal] = useState(false);
//   const [closeAll, setCloseAll] = useState(false);

//   const toggle = () => setModal(!modal);
//   const toggleNested = () => {
//     setNestedModal(!nestedModal);
//     setCloseAll(false);
//   };
//   const toggleAll = () => {
//     setNestedModal(!nestedModal);
//     setCloseAll(true);
//   };

//   const [data, setData] = useState([]);

//   const [modalOpen, setModalOpen] = useState(false);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("[ini data]", data);
//         setData(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);
//   const details = (value) => {
//     alert(
//       "Details \nAddress : " +
//         value.address.street +
//         " " +
//         value.address.suite +
//         " " +
//         value.address.city +
//         "\nPhone : " +
//         value.phone +
//         "\nWeb : " +
//         value.website
//     );
//   };
//   return (
//     <div>
//       <div>
//         {data.map((value) => (
//           <div>
//             <Row>
//               <Col sm="6">
//                 <Card body>
//                   <CardTitle tag="h5">{value.name}</CardTitle>
//                   <CardText>{value.email}</CardText>
//                   <Button onClick={toggle}>Go somewhere</Button>
//                 </Card>
//               </Col>
//             </Row>
//           </div>
//         ))}
//       </div>
//       {/* End Card */}

//       {/* Modal Nya  */}
//       <Modal isOpen={modal} toggle={toggle} className={className}>
//         <ModalHeader toggle={toggle}>Modal title</ModalHeader>
//         <ModalBody>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//           <br />
//           <Button color="success" onClick={toggleNested}>
//             Show Nested Modal
//           </Button>
//           <Modal
//             isOpen={nestedModal}
//             toggle={toggleNested}
//             onClosed={closeAll ? toggle : undefined}
//           >
//             <ModalHeader>Nested Modal title</ModalHeader>
//             <ModalBody>Stuff and things</ModalBody>
//             <ModalFooter>
//               <Button color="primary" onClick={toggleNested}>
//                 Done
//               </Button>{" "}
//               <Button color="secondary" onClick={toggleAll}>
//                 All Done
//               </Button>
//             </ModalFooter>
//           </Modal>
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" onClick={toggle}>
//             Do Something
//           </Button>{" "}
//           <Button color="secondary" onClick={toggle}>
//             Cancel
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// };

// export default ModalExample;
