import React, { useContext, createContext, useState } from "react";
import Section1 from "../component/Section1";
import Section2 from "../component/Section2";
import Section3 from "../component/Section3";
import Section4 from "../component/Section4";
import Section5 from "../component/Section5";
import Section6 from "../component/Section6";
import "../component/componen.css";
import "../App.css";
import FormCycle from "../component/FormCycle";

const themes = {
  cyan: {
    text: "ini Cyan",
    background: "#ffff",
    color: "cyane",
    border: "1px solid cyan",
  },
  black: {
    text: "ini Black",
    background: "grey",
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

export default function Home() {
  const [valueTheme, setValueTheme] = useState(themes.cyan);

  const togTheme = () =>
    valueTheme === themes.cyan
      ? setValueTheme(themes.black)
      : setValueTheme(themes.cyan);

  return (
    <div className="font-fams">
      {/* THEME */}
      <ThemeContext.Provider value={valueTheme}>
        <div
          style={{
            backgroundColor: valueTheme.background,
            width: "100%",
            maxWidth: "100%",
            overflowX: "hidden",
            position: "relative",
            top: "-1.4em",
            overflowY: "hidden",
            maxHeight: "100%",
          }}
        >
          <ThemeContext.Provider value={valueTheme}>
            <div
              // tinggal uncoment
              // cara 1
              className=""
              style={{ backgroundColor: valueTheme.background }}
              // cara 2
              // eslint-disable-next-line react/jsx-no-duplicate-props
              // className={`contentWrapper ${valueTheme ? "cyan" : "blue"}`}
            >
              <button
                className="button1 sejajar-nav"
                onClick={
                  togTheme
                  // () => setValueTheme(valueTheme ? themes.cyan : themes.black)
                }
              >
                Nyalakan Background
              </button>
            </div>

            {/* END THEME */}
            <Section1
              title="Selamat Datang"
              subtitle="BetterThanBefore akan mendampingi anda ketika anda memiliki masalah rumit dalam hidup"
            />
            <Section2 words="Kami akan mendampingi kamu sampai kamu merasa tenang dan pasti nya BetterThanBefore dari sebelumnya" />
            <Section3 />
            <Section6
              title="To Do List Kamu Hari ini"
              subtitle="Setidaknya kamu pernah mengingat kegiatan mu, sebelum lupa mu datang, maka yuk catet di to do list"
            />
            <FormCycle />
            <Section4 />

            <Section5
              lisens="Build With Effort"
              est="2021"
              product="BetterThanBefore"
            />
          </ThemeContext.Provider>
        </div>
      </ThemeContext.Provider>
    </div>
  );
}
