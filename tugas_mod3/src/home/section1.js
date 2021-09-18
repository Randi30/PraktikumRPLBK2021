import React, { Component } from "react";
import supra from "../asset/image/SupraY.jpg";

class Section1 extends Component {
  render() {
    return (
      <div
        style={{
          height: "50vh",
          display: "flex",
        }}
      >
        <div style={{ flex: "1", padding: "3em" }}>
          <h1>Welcome To My Tugas Mod 3</h1>
          <h3>Kelompok 20</h3>
          <ul>Kelompok kami terdiri dari</ul>
          <li>Randi Nur Ardianto - 21120118130069</li>
          <li>Tedy Anggi - 21120117130055</li>
        </div>
        <div
          style={{
            flex: "1",
            padding: "3em",
            borderRadius: "60px",
            marginRight: "2em",
            boxShadow: "0px 0px 8px 0px cyan",
            backgroundImage: 'url("../src/asset/image/SupraY.jpg")',
            backgroundSize: "cover",
          }}
        >
          <div
            style={{
              backgroundSize: "cover",
              // eslint-disable-next-line no-template-curly-in-string

              height: "100%",
            }}
          ></div>
        </div>
      </div>
    );
  }
}
export default Section1;
