import { Component } from "react";
import React from "react";
import Id from "../lifecycle/id";
// import Misc from "../lifecycle/misc";

class Dashboard extends Component {
  componentDidMount() {}

  state = {
    id: false,
    // misc: false,
  };

  showComponentId = () => {
    this.setState(() => {
      return {
        id: !this.state.id,
      };
    });
  };

  // showComponentMisc = () => {
  //   this.setState(() => {
  //     return {
  //       misc: !this.state.misc,
  //     };
  //   });
  // };

  render() {
    return (
      <div
        style={{
          // border: "1px solid red",
          margin: "auto",
          textAlign: "center",
          width: "60%",
          marginTop: "-4em",
          marginBottom: "5em",
        }}
      >
        <div>
          <h1>Mari Konsultasi Dengan Kami Dengan Membuat Jadwal</h1>
        </div>
        <div
          style={{
            // border: "1px solid black",
            margin: "auto",
            width: "70%",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <button onClick={this.showComponentId}>
              {this.state.id ? "Cancel Reserve" : "Yuk Buat Janji Konsultasi"}
            </button>
            <br />
            <br />
            {this.state.id && <Id />}
          </div>
          <div>
            {/* <button onClick={this.showComponentMisc}>
              {this.state.misc ? "Close, Not Now" : "Open Data Reserve"}
            </button> */}
            <br />
            {
              this.state.misc
              //  && <Misc />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
