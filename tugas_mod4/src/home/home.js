import React, { useContext, createContext, useState, useReducer } from "react";
import Section1 from "./section1";
import Section2 from "./section2";
import "../App.css";
const initialState = {count: 0};


const themes = {
  blue: {
    text: "rgb(97, 218, 251)",
    background: "blue",
    color: "blue",
    border: "1px solid blue",
  },
  cyan: {
    text: "rgb(97, 210, 159)",
    background: "#69585F",
    color: "cyane",
    border: "1px solid cyan",
  },
  black: {
    text: "#a8dadc",
    background: "#fdfcdc",
    color: "white",
    border: "1px solid black",
  },
};

const ThemeContext = createContext();

function Content(props) {
  return (
    <div>
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

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export default function Home() {
  const [valueTheme, setValueTheme] = useState(themes.cyan); //use State
  const [state, dispatch] = useReducer(reducer, initialState);
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
            height: "auto",
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
                className="button"
                onClick={() =>
                  setValueTheme(valueTheme === themes.blue ? themes.cyan : themes.blue) >
                  dispatch({type: 'decrement'})
                }
              >
                Ganti Background
              </button>
            </div>
          </ThemeContext.Provider>
          <div>{/* <SectionContext /> */}</div>

          {/* Section 1 */}
          <div>
            <Section1 />
          </div>
          {/* Section 1 End */}
          {/* Section 2 */}
          <div>
            <Section2 />
          </div>
          {/* <section2 /> */}
          {/* Section 2 end */}
        </div>
      </ThemeContext.Provider>
    </div>
  );
}
