import React, { Fragment } from "react";

class Misc extends React.Component {
  componentWillUnmount() {
    alert("Kembali Ke Home");
  }

  constructor(props) {
    super( props);
    this.handleChangeStuff = this.handleChangeStuff.bind(this);
    this.state = {
      stuff: [
        ["Supra MK5 JZ90 2021 Black", 20000],
        ["Supra MK5 JZ90 2021 Yellow", 15000],
        ["Supra MK5 JZ90 2021 White Metalic", 20000],
        ["Supra MK4 1993 Black", 10000],
        ["Supra MK4 1993 White", 50000],
      ],
      Car: {
        Mobil1: 0,
        Mobil2: 0,
        Mobil3: 0,
      },
      totalFinalPrice: 0,
      totalDp: 0,
    };
  }

  handleCalculation = () => {
    const { Mobil1, Mobil2, Mobil3 } = this.state.Car;
    var total = Mobil1 + Mobil2 + Mobil3;
    var dp = total / 2;
    this.setState({
      ...this.state.Car,
      totalFinalPrice: total,
      totalDp: dp,
    });
  };

  handleChangeStuff(e) {
    e.preventDefault();
    const { Car } = this.state;
    const { name } = e.target;
    var index = e.nativeEvent.target.selectedIndex;
    const { value } = e.nativeEvent.target[index];
    this.setState(
      {
        Car: {
          ...Car,
          [name]: Number(value),
        },
      },
      this.handleCalculation
    );
  }

  render() {
    const { stuff, totalFinalPrice, totalDp } = this.state;
    return (
      <>
        <div>
          <div style={{ height: "75%" }}>
            <div className="cashier-calculator">
              <div className="n">
                <h2>List Indent Ready Sport Car</h2>
                <br />
                <select onChange={this.handleChangeStuff} name="Car1">
                  <option value="0">Your Target 1</option>
                  <Fragment>
                    {stuff.map((car) => {
                      return <option value={car[1]}>{car[0]}</option>;
                    })}
                  </Fragment>
                </select>
                <br />
                <select onChange={this.handleChangeStuff} name="Car2">
                  <option value="0">Your Target 2</option>
                  <Fragment>
                    {stuff.map((car) => {
                      return <option value={car[1]}>{car[0]}</option>;
                    })}
                  </Fragment>
                </select>
                <br />
                <h5>Total Target your Dream: Rp {totalFinalPrice}.000.000</h5>
              </div>
              <h2
                style={{
                  color: "#6e0234",
                  textAlign: "center",
                  flex: "1 0 100%",
                  margin: "10px 0",
                }}
              >
                Silakan Bayar: Rp = {totalDp} K
              </h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Misc;
