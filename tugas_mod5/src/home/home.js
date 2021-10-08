import React, { useContext, createContext, useState } from "react";
import Section1 from "./section1";
import Index from "../product";
import "../App.css";

const themes = {
  blue: {
    text: "rgb(97, 218, 251)",
    background: "blue",
    color: "blue",
    border: "1px solid blue",
  },
  cyan: {
    text: "rgb(97, 210, 159)",
    background: "#11052C",
    color: "cyane",
    border: "1px solid cyan",
  },
  black: {
    text: "#a8dadc",
    background: "#FFF7AE",
    color: "white",
    border: "1px solid black",
  },
};

const ThemeContext = createContext();

function Content(props) {
  return (
    <div
      style={{
        marginTop: "2em",
        position: "relative",
        left: "43%",
      }}
    >
      <Text tema={props.tema} />
    </div>
  );
}

function Text(props) {
  const theme = useContext(ThemeContext); //Use Context
  return (
    <p
      // tinggal uncomment aja
      // cara 1
      className="titleContext"
      style={{ color: theme.text }}
      // cara 2
      // className={`titleContext ${theme === themes.light ? "dark" : "light"}`}
    >
      context value {theme.text}
    </p>
  );
}

export default function Home() {
  const [valueTheme, setValueTheme] = useState(themes.cyan); //use State
  return (
    <div>
      <ThemeContext.Provider value={valueTheme}>
        <div
          style={{
            backgroundColor: valueTheme.background,
            width: "100%",
            maxWidth: "100%",
            overflowX: "hidden",
            position: "relative",
            top: "-1.3em",
            overflowY: "hidden",
            maxHeight: "100%",
          }}
        >
          <ThemeContext.Provider value={valueTheme}>
            <div
              // tinggal uncoment
              // cara 1
              className="contentWrapper"
              style={{ backgroundColor: valueTheme.background }}
              // cara 2
              // eslint-disable-next-line react/jsx-no-duplicate-props
              className={`contentWrapper ${
                valueTheme === themes.black ? "cyan" : "black"
              }`}
            >
              <Content tema={valueTheme} />
              <button
                className="button margin"
                onClick={() =>
                  setValueTheme(
                    valueTheme === themes.blue ? themes.cyan : themes.black
                  )
                }
              >
                Nyalakan Background
              </button>
            </div>
          </ThemeContext.Provider>
          <div>{/* <SectionContext /> */}</div>

          {/* Section 1 */}
          <div>
            <Section1 />
          </div>
          {/* Section 1 End */}
          {/* Section 1 */}
          <div>
            <Index />
          </div>
          {/* Section 1 End */}
        </div>
      </ThemeContext.Provider>
      {/* <Axio /> */}
    </div>
  );
}
