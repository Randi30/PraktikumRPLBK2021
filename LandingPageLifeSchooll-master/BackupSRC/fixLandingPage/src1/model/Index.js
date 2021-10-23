/* eslint-disable jsx-a11y/anchor-is-valid */
import { React } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "../view/Home";
import Service from "../view/Service";
import "../App.css";

export default function Model(props) {
  return (
    <>
      <BrowserRouter>
        <header className="navv font-fams">
          <div className="title">
            <p>BetterThanBefore</p>
          </div>
          <nav className="right">
            <Link className="button margin-2em" to="/">
              Home
            </Link>
            <Link className="button margin-2em" to="/Effect">
              Service
            </Link>
            <a className="button margin-2em" href="#">
              Login
            </a>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Effect" exact component={Service} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

<style></style>;
