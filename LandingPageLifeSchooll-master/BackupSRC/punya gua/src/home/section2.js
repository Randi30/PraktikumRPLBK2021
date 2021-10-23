import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import lis1 from "../card/list01";
import lis2 from "../card/list02";
import "../App.css";

export default class Section2 extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="content">
            <h1>Tupperware</h1>
            <Link className="button" to="/gelas">
              MK5 JZ90 2021
            </Link>
            <Link className="button navtext2" to="/makanan">
              MK4 1993
            </Link>
          </div>
          <Switch>
            <Route path="/makanan" exact component={lis1} />
            <Route path="/gelas" exact component={lis2} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
