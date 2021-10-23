import "./App.css";
import { React } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import home from "./home/home";
import "./App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <header className="navv">
          <div
            className="title"
            style={{
              position: "relative",
              left: "45%",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            <p onClick={() => alert("Nama - Nim")}>Modul 4 Kelompok ??</p>
          </div>
          <nav
            style={{
              position: "relative",
              bottom: "2.5em",
              marginRight: "5em",
            }}
            className="right"
          >
            <div style={{ float: "left" }}>
              <Link className="button" to="/">
                Home
              </Link>
            </div>
            <div style={{ float: "right" }}></div>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
