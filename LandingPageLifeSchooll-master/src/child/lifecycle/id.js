import { Component } from "react";
import * as React from "react";

import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";

class Id extends Component {
  componentWillMount() {
    alert("Silahkan Isikan Waktu Kamu Konsultasi");
  }

  state = {
    CustTime: "",
    DateNote: "",
    Name: " ",
    Umur: " ",
    Email: " ",
  };

  handleName = (event) => {
    const { name, value } = event.target;
    this.setState((state) => {
      return {
        [name]: value,
      };
    });
  };

  handleIdPembelian = (event) => {
    const { name, value } = event.target;
    this.setState((state) => {
      return {
        [name]: value,
      };
    });
  };

  handleTime = (event) => {
    const { name, value } = event.target;
    this.setState((state) => {
      return {
        [name]: value,
      };
    });
  };

  render() {
    return (
      // <div>
      //   <label for="CustTime">Nama : </label>
      //   <br />
      // <input
      //   onChange={this.handleName}
      //   name="Name"
      //   type="text"
      //   value={this.state.Name}
      //   style={{ color: "#6e0234" }}
      //   maxLength="16"
      // />
      //   <br />
      //   <label for="CustTime">Input data On:</label>
      //   <br />
      //   <input
      //     onChange={this.handleIdPembelian}
      //     name="CustTime"
      //     type="time"
      //     value={this.state.idPembelian}
      //     style={{ color: "#6e0234" }}
      //     maxLength="2"
      //   />
      //   <br />
      //   <label for="DateNote">Tanggal Pembelian</label>
      //   <br />
      //   <input
      //     type="date"
      //     onChange={this.handleNoKasir}
      //     name="DateNote"
      //     value={this.state.noDigit}
      //     style={{ color: "#6e0234" }}
      //     maxLength="1"
      //   />
      //   <br />
      //   <br />
      // <label for="Kode Transaksi:">Dilaksanakan Pembelian Pada : </label>
      // <br />
      // <span style={{ color: "#6e0234" }}>
      //   Atas Nama : {this.state.Name}
      //   <br />
      //   Pada Tanggal : {this.state.DateNote}
      //   <br />
      //   Jam : {this.state.CustTime}
      // </span>
      // </div>

      <Box sx={{ "& > :not(style)": { m: 1 } }} style={{ display: "grid" }}>
        <div className="inputConsultan">
          <TextField
            id="input-with-icon-textfield"
            label="Name"
            type="text"
            onChange={this.handleName}
            name="Name"
            value={this.state.Name}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <br />
          <TextField
            id="input-with-icon-textfield"
            label="Email"
            type="email"
            onChange={this.handleName}
            name="Email"
            value={this.state.Email}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <br />
          <TextField
            id="input-with-icon-textfield"
            label="Umur Kamu"
            type="Umur"
            onChange={this.handleName}
            name="Umur"
            value={this.state.Umur}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <br />
          <TextField
            id="input-with-icon-textfield"
            label="Tanggal"
            type="date"
            onChange={this.handleName}
            name="DateNote"
            value={this.state.DateNote}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <br />
          <TextField
            id="input-with-icon-textfield"
            label="Jam Konsultasi"
            type="time"
            onChange={this.handleTime}
            name="CustTime"
            value={this.state.CustTime}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </div>
        <div className="HasilInput">
          <label for="Kode Transaksi:">Dilaksanakan Pembelian Pada : </label>
          <br />
          <span style={{ color: "#6e0234" }}>
            Atas Nama :<br />
            {this.state.Name}
            <br />
            <br />
            Umur : <br />
            {this.state.Umur} Tahun
            <br />
            <br />
            Email Konsultan :<br /> {this.state.Email}
            <br />
            <br />
            Pada Tanggal : <br />
            {this.state.DateNote}
            <br />
            <br />
            Jam : <br />
            {this.state.CustTime}
          </span>
        </div>
      </Box>
    );
  }
}

export default Id;
