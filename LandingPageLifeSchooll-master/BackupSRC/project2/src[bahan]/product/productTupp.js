import { React } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "../App.css";
import lis1 from "../card/list01";
import lis2 from "../card/list02";

// import logo from "../asset/image/logo512.png";

export const productTupp = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="content">
          <h1>Tupperware</h1>
          <Link className="text" to="/gelas">
            Gelas
          </Link>
          <Link className="text navtext2" to="/penyimpan">
            Penyimpan
          </Link>
        </div>
        <Switch>
          <Route path="/makanan" exact component={lis1} />
          <Route path="/gelas" exact component={lis2} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
