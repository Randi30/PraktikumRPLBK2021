import React from "react";
import "./componen.css";
import "../App.css";

export default function Section5(props) {
  const { linsens, est, product } = props;
  return (
    <div className="container-sec5 font-fams">
      <div className="left">
        <p className="text-sec5">{linsens}</p>
        <p className="text-sec5">Est. {est}</p>
      </div>
      <p className="center">{product}</p>
      <div className="rights">
        <p className="sosmed">Twitter</p>
        <p className="sosmed">Instagram</p>
        <p className="sosmed">Tiktok</p>
      </div>
    </div>
  );
}
