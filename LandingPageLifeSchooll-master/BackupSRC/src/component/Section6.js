import React from "react";
import { Button } from "reactstrap";
import "./componen.css";
import "../App.css";
import Todo from "../child/todo/index";

export default function Section1(props) {
  const { title, subtitle } = props;
  return (
    <div className="container-s1 font-fams">
      <div className="padding-s1">
        <Todo />
        <div className="s1-post1">
          <div className="s1-boxtext-post1">
            <h1 className="s1-title-camp1">{title}</h1>
            <p className="s1-subtitle-camp1">{subtitle}</p>
          </div>
          <div></div>

        </div>
      </div>
    </div>
  );
}
