import React, { Component } from "react";

class Id extends Component {
  componentWillMount() {
    alert("Silahkan Isikan Waktu anda akses");
  }

  state = {
    CustTime: "",
    DateNote: "",
  };

  handleIdPembelian = (event) => {
    const { name, value } = event.target;
    this.setState((state) => {
      return {
        [name]: value,
      };
    });
  };

  handleNoKasir = (event) => {
    const { name, value } = event.target;
    this.setState((state) => {
      return {
        [name]: value,
      };
    });
  };

  render() {
    return (
      <div>
        <label for="CustTime">Input data On:</label>
        <br />
        <input
          onChange={this.handleIdPembelian}
          name="CustTime"
          type="time"
          value={this.state.idPembelian}
          style={{ color: "#6e0234" }}
          maxLength="2"
        />
        <br />
        <label for="DateNote">Tanggal Pembelian</label>
        <br />
        <input
          type="date"
          onChange={this.handleNoKasir}
          name="DateNote"
          value={this.state.noDigit}
          style={{ color: "#6e0234" }}
          maxLength="1"
        />
        <br />
        <br />
        <label for="Kode Transaksi:">Dilaksanakan Pembelian Pada : </label>
        <br />
        <span style={{ color: "#6e0234" }}>
          {this.state.CustTime}
          {this.state.DateNote}
        </span>
      </div>
    );
  }
}

export default Id;
