/* eslint-disable react-hooks/rules-of-hooks */
import { React, useState } from "react";
import Dashboard from "../lifecycle/dashboard";
// import "./input.css";


export default function Section3() {

  const contoh = useState(true);
  console.log("[state]", contoh);
  const [show, setShow] = useState(true);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const submit = () => {
    let a =
      // eslint-disable-next-line eqeqeq
      password == password1
        ? "Username " + user + " Berhasil dibuat"
        : "Password Tidak Valid";
    alert(a);
  };
  return (
    <div style={{
        height: "54vh", //Nanti Dsini Apus
    overflow: "hidden",
    marginTop:'2em',
    paddingRight:'2em',
    width: "99.85%",
    
    display: 'flex',}}>
    <div
      style={{
        textAlign: "center",
        flex: '1',
        padding: '30px',
      }}
      className="container"
    >
      {show && (
        <form
          style={{
            position: "relative",
            boxSizing: "border-box",
            width: "60%",
            maxWidth:'605',
            // eslint-disable-next-line no-dupe-keys
            position: 'relative',
            marginBottom:'2em',
            left: '20%',
            backgroundColor: "#ffff",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0px 0px 8px 0px cyan"

          }}
          onSubmit={submit}
        >
          <div className="">
            <p
              style={{
                textAlign: "center",
                position: "relative",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Your Identity
            </p>
          </div>
          <div className="inputWrapper">
            <div>
              <input
                style={{
                  padding: "7px",
                  outline: "none",
                  width: '90%',
                  borderRadius: "8px",
                  fontFamily: "poppins",
                  fontSize: "15px",
                  boxShadow: "0px 0px 8px 0px cyan",
                  border: 'none',
                  marginBottom:'10px',
                }}
                className="form"
                placeholder="name"
                size="50"
                value={user}
                onChange={(event) => setUser(event.target.value)}
              />
            </div>
            <div>
              <input
                style={{
                  padding: "7px",
                  outline: "none",
                  width: '90%',
                  borderRadius: "8px",
                  fontFamily: "poppins",
                  fontSize: "15px",
                  boxShadow: "0px 0px 8px 0px cyan",
                  border: 'none',
                  marginBottom:'10px',
                }}
                type="password"
                required
                placeholder="password"
                size="50"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div>
              <input
                style={{
                  padding: "7px",
                  outline: "none",
                  width: '90%',
                  borderRadius: "8px",
                  fontFamily: "poppins",
                  fontSize: "15px",
                  boxShadow: "0px 0px 8px 0px cyan",
                  border: 'none',
                  marginBottom:'10px',
                }}
                type="password"
                required
                placeholder="password"
                size="50"
                value={password1}
                onChange={(event) => setPassword1(event.target.value)}
              />
            </div>
            <div>
              <input
                style={{
                  padding: "5px 30px 5px 30px",
          borderRadius: "5px",
          outline: "none",
          marginTop:"1em",
                }}
                type="submit"
                placeholder="password"
                size="50"
                value="Submit"
                onChange={(event) => setPassword1(event.target.value)}
              />
            </div>
          </div>
        </form>
      )}
      <button
        style={{
          padding: "5px 30px 5px 30px",
          borderRadius: "5px",
          position: "relative",
          outline: 'none',

        }}
        className="Button"
        onClick={() => setShow(!show)}
      >
        {show ? "hide" : "show"}
      </button>
    </div>
    <div style={{    flex:'1'}}>
        <Dashboard />
    </div>
    </div>
  );
}
