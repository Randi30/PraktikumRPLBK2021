import React from "react";
import Section1 from "./section1";
import Section3 from "./section3";
import "../App.css";

export default function Home() {
  return (
    <div
      style={{
        background: "#A3ebb1",
        marginTop: "0px",
        width: "100%",
        border: "1px solid #A3ebb1",
        overflowX: "hidden",
      }}
    >
      <div style={{ marginTop: "2em" }}>
        <Section1 />
      </div>
      {/* Section 3 */}
      <div>
        <Section3 />
      </div>
      {/* Section 3 End */}
    </div>
  );
}
