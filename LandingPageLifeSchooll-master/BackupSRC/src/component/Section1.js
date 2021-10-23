import React from "react";
import { Button } from "reactstrap";
import "./componen.css";
import "../App.css";

export default function Section1(props) {
  const { title, subtitle } = props;
  return (
    <div className="container-s1 font-fams">
      <div className="padding-s1">
        <div className="s1-post1">
          <div className="s1-boxtext-post1">
            <h1 className="s1-title-camp1">{title}</h1>
            <p className="s1-subtitle-camp1">{subtitle}</p>
          </div>
          <div></div>
          <Button color="primary" className="buutton lebar">
            hai
          </Button>
        </div>
        <div className="s1-post2">
          <div
            style={{
              backgroundSize: "cover",
              // eslint-disable-next-line no-template-curly-in-string

              height: "100%",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
