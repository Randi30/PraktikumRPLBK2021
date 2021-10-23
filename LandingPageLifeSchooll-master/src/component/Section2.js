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
    titleCard: "Leukimia",
    describCard:
      "Leukemia adalah kanker jaringan pembentuk darah, termasuk tulang sumsum. Gejala yang termasuk kelelahan, penurunan berat badan, sering infeksi, dan mudah berdarah atau memar. ",
  },
  {
    titleCard: "Diabtese",
    describCard:
      "Sejumlah penyakit yang mengakibatkan terlalu banyak kadar gula dalam darah (glukosa darah tinggi). Sering merasa haus. Sering buang air kecil, terutama di malam hari. Sering merasa sangat lapar. Turunnya berat badan tanpa sebab yang jelas ",
  },
  {
    titleCard: "Covid",
    describCard:
      "Virus dapat menyebar dari mulut atau hidung orang yang terinfeksi melalui partikel cairan kecil ketika orang tersebut batuk, bersin, berbicara, bernyanyi, atau bernapas",
  },
  {
    titleCard: "Usus Buntu",
    describCard:
      "usus buntu adalah peradangan yang terjadi pada usus buntu atau apendiks. Kehilangan nafsu makan, Perut kembung, Tidak bisa buang gas, Mual, Konstipasi atau diare, Demam.",
  },
];

export default function Section2(props) {
  const [isOpen1, setIsOpen1] = useState(true);
  const { words } = props;
  const toggle = () => setIsOpen1(!isOpen1);
  return (
    <div className="container-s2 font-fams">
      <p className="text">{words}</p>
      <div className="container-toggle">
        <div>
          <div onClick={toggle} className="card-s2">
            Tutup
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
