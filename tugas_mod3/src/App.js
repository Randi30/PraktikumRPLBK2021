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
          <div className="title" style={{ marginLeft: "5em" }}>
            <p>Tugas Praktikum RPLBK Kelompok 20</p>
          </div>
          <nav
            style={{
              float: "right",
              position: "relative",
              bottom: "2.5em",
              marginRight: "5em",
            }}
            className="right"
          >
            <Link className="button" to="/">
              Home
            </Link>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
