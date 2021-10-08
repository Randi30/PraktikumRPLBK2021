import "./App.css";
import { React } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Index from "./product/index";
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
            {/* <Link className="button" to="/Test">
              Test
            </Link> */}
            {/* <Link className="button" to="/input">
              Input
            </Link>
            <Link className="button" to="/Produk">
              Produk
            </Link> */}
            {/* <Link className="button navv text2" to="/GantiBackground">
              Ganti Background
            </Link> */}
            <Link className="button" to="/Effect">
              Effect
            </Link>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={home} />
          {/* <Route path="/test" exact component={Index1} /> */}
          {/* <Route path="/Produk" exact component={productTupp} />
          <Route path="/GantiBackground" exact component={ubahWarna} /> */}
          <Route path="/Effect" exact component={Index} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
