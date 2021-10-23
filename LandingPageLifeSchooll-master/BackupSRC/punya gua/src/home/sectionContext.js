import { useContext, createContext, useState } from "react";
// import "./context.css";

const themes = {
  blue: {
    color: "blue",
    border: "1px solid blue",
  },
  cyan: {
    color: "cyane",
    border: "1px solid cyan",
  },
  black: {
    color: "white",
    border: "1px solid black",
  },
};

const ThemeContext = createContext();

export default function SectionContext() {
  const [valueTheme, setValueTheme] = useState(themes.cyan); //use State

  return (
    <ThemeContext.Provider value={valueTheme}>
      <div
        // tinggal uncoment
        // cara 1
        className="contentWrapper"
        style={{ backgroundColor: valueTheme.background }}
        // cara 2
        // className={`contentWrapper ${
        //   valueTheme === themes.light ? "dark" : "light"
        // }`}
      >
        <Content tema={valueTheme} />
        <button
          className="Button"
          onClick={() =>
            setValueTheme(
              valueTheme === themes.blue ? themes.cyan : themes.black
            )
          }
        >
          change
        </button>
      </div>
    </ThemeContext.Provider>
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
function Content(props) {
  return (
    <div>
      <Text tema={props.tema} />
    </div>
  );
}
