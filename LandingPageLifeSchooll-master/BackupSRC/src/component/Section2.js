import "../component/componen.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import {
  Collapse,
  Button,
  CardBody,
  Card,
  CardTitle,
  CardText,
} from "reactstrap";
import "../App.css";

const data = [
  {
    titleCard: "Hai",
    describCard:
      "Ini Adalah permasalahan hidup Ini Adalah permasalahan hidupIni Adalah permasalahan hidup ",
  },
  {
    titleCard: "Hai",
    describCard:
      "Ini Adalah permasalahan hidup Ini Adalah permasalahan hidupIni Adalah permasalahan hidup ",
  },
  {
    titleCard: "Hai",
    describCard:
      "Ini Adalah permasalahan hidup Ini Adalah permasalahan hidupIni Adalah permasalahan hidup ",
  },
  {
    titleCard: "Hai",
    describCard: "Ini Adalah permasalahan hidup Ini Adalah permasalahan ",
  },
];

export default function Section2(props) {
  const [isOpen1, setIsOpen1] = useState(false);
  const { words } = props;
  const toggle = () => setIsOpen1(!isOpen1);
  return (
    <div className="container-s2 font-fams">
      <p className="text">{words}</p>
      <div className="container-toggle">
        <div>
          <div onClick={toggle} className="card-s2">
            Lihat!
          </div>
          <div
            style={{ width: "100%", display: "grid", gridAutoFlow: "column" }}
          >
            {data.map((value) => (
              <Collapse isOpen={isOpen1}>
                <Card className="cardbody-s2">
                  <CardBody>
                    <div className="box">
                      <CardTitle tag="h5">{value.titleCard}</CardTitle>
                      <CardText>{value.describCard}</CardText>
                      <Button onClick={toggle}>Tutup</Button>
                    </div>
                  </CardBody>
                </Card>
              </Collapse>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
