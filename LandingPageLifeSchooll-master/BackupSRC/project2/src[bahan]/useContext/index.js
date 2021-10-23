/* eslint-disable react-hooks/exhaustive-deps */
// Persiapan MOD 5

import { useState, useEffect } from "react";
import axios from "axios";
import { Component } from "react";

export default class Index extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      tekkom: [],
      visible: true,
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/users",
      headers: {
        accept: "*/*",
      },
    })
      .then((data) => {
        console.log(data.data);
        this.setState({
          tekkom: data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    // dipanggil hanya sekali
    // useEffect(() => {
    //   fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log("[ini data]", data);
    //       setData(data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }, []);

    // const handleButton = (props) => {
    //   alert("Hai ini namanya");
    // };
    // const {value} = props;  ];

    const data1 = [
      { Nama: "Randi", Nim: "21120118130069" },
      { Nama: "Randi", Nim: "21120118130069" },
      { Nama: "Randi", Nim: "21120118130069" },
    ];

    return (
      <div
        style={{
          display: "grid",
          // flexWrap: "wrap",
          gridTemplateColumns: "25% 25% 25%  25% ",
          justifyContent: "space-around",
          marginTop: "1.5em",
          Width: "100%",
        }}
      >
        <div>
          {this.state.tekkom.map((res) => (
            <div key={res.name}>
              <h1>Nama : {res.name}</h1>
              <p>Nim : {res.email}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
