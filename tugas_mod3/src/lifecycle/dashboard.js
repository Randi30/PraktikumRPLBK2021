import { Component } from "react";
import React from "react";
import Id from "../lifecycle/id";
import Misc from "../lifecycle/misc";

class Dashboard extends Component {
  componentDidMount() {
    alert("Welcome To tugas Kelompok 20");
  }

  state = {
    id: false,
    misc: false,
  };

  showComponentId = () => {
    this.setState(() => {
      return {
        id: !this.state.id,
      };
    });
  };

  showComponentMisc = () => {
    this.setState(() => {
      return {
        misc: !this.state.misc,
      };
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Reserve Indent Sport Cars</h1>
        </div>
        <div
          style={{
            boxShadow: "0px 0px 8px 0px cyan",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "space-around",
            padding: "20px",
            marginRight: "3em",
          }}
        >
          <div>
            <button onClick={this.showComponentId}>
              {this.state.id ? "Cancel Reserve" : "Isi data Reserve Car"}
            </button>
            <br />
            <br />
            {this.state.id && <Id />}
          </div>
          <div>
            <button onClick={this.showComponentMisc}>
              {this.state.misc ? "Close, Not Now" : "Open Data Reserve"}
            </button>
            <br />
            {this.state.misc && <Misc />}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
