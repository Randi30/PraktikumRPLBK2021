import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import "./componen.css";
import Hope from "../child/card/Hope";
import Join from "../child/card/Join";
import Metode from "../child/card/Metode";
import { Collapse } from "reactstrap";
import "../App.css";

export default function Section3() {
  const [isOpen1, setIsOpen1] = useState(true);

  const toggle = () => setIsOpen1(!isOpen1);
  return (
    <div className="container-s3 font-fams">
      <button onClick={toggle} className="button1 vis">
        hai
      </button>
      <div className="flexing-3">
        <BrowserRouter>
          {/* <Collapse isOpen={isOpen1}> */}
          <div className="center ctr">
            <Link className="button1" to="/Home/Hope">
              Hope
            </Link>
            <Link className="button1" to="/Home/Metode">
              Metode
            </Link>
            <Link className="button1" to="/Home/Join">
              Join
            </Link>
          </div>

          <Switch>
            <Route path="/Home/Hope" exact component={Hope} />
            <Route path="/Home/Metode" exact component={Metode} />
            <Route path="/Home/Join" exact component={Join} />
          </Switch>
          {/* </Collapse> */}
        </BrowserRouter>
      </div>
    </div>
  );
}
