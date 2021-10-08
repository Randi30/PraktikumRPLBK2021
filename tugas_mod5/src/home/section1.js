import React, { Component } from "react";

class Section1 extends Component {
  render() {
    return (
      <div
        style={{
          height: "50vh",
          padding: "3em",
          borderRadius: "60px",
          marginRight: "2em",
          marginLeft: "2em",
          boxShadow: "0px 0px 10px 0px cyan",
          backgroundColor: "aquamarine",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "3em",
            paddingTop: "1em",
            fontFamily: "monospace",
            fontSize: "30px",
          }}
        >
          <h1>Tugas Mod 4</h1>
          <h3>Kelompok ??</h3>
          <ul>Kelompok kami terdiri dari</ul>
          <li>Nama - Nim</li>
          <li>Nama - Nim</li>
        </div>
        <div
          style={{
            flex: "1",
            backgroundImage: 'url("../asset/image/SupraY.jpg")',
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
