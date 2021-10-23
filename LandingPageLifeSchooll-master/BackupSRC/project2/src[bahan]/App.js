import "./App.css";
import { React } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { productTupp } from "./product/productTupp";
import Index from "./product/index";
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
            <p onClick={() => alert("Hai")}>Modul 4 Kelompok ??</p>
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
              {/* <Link className="button" to="/Test">
              Test
            </Link> */}
              {/* <Link className="button" to="/input">
              Input
            </Link>
            <Link className="button" to="/Produk">
              Produk
            </Link> */}
            </div>
            <div style={{ float: "right" }}>
              {/* <Link className="button navv text2" to="/GantiBackground">
              Ganti Background
            </Link> */}
              {/* <Link className="button" to="/Effect">
                Effect
              </Link> */}
            </div>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={home} />
          {/* <Route path="/test" exact component={Index1} /> */}
          {/* <Route path="/Produk" exact component={productTupp} />
          <Route path="/GantiBackground" exact component={ubahWarna} /> */}
          {/* <Route path="/Effect" exact component={Index} /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}
