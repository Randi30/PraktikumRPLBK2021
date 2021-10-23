/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import { useState, useEffect } from "react";
import "../App.css";

export default function Index() {
  const [data, setData] = useState([]);

  // dipanggil hanya sekali
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("[ini data]", data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const data1 = [{ Nama: "Nama Perwakilan", Nim: "Nim Perwakilan" }];

  const details = (value) => {
    alert(
      "Details \nAddress : " +
        value.address.street +
        " " +
        value.address.suite +
        " " +
        value.address.city +
        "\nPhone : " +
        value.phone +
        "\nWeb : " +
        value.website
    );
    {
      data1.map((res) => alert("Disusun Oleh\n" + res.Nama + " - " + res.Nim));
    }
  };
  const rest = (res) => {
    alert("Disusun Oleh\n" + data1.Nama + " - " + data1.Nim);
  };
  return (
    <div>
      <h1 className="margin">Hai Ini UseEffect</h1>
      <div
        style={{
          display: "grid",
          // flexWrap: "wrap",
          gridTemplateColumns: "25% 25% 25% ",
          justifyContent: "space-around",
          marginTop: "1.5em",
          Width: "100%",
          backgroundColor: "#FFEDDA",
        }}
      >
        {data.map((value) => (
          <div style={{}}>
            <div
              style={{
                margin: "10px",
                fontFamily: "poppins",
              }}
            >
              <div
                style={{
                  padding: "10px",
                  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                  backgroundColor: "#f5f5f5f2",
                  borderRadius: "15px",
                  height: "50%",
                }}
                className="group relative shadow"
                onClick={() => details(value)}
              >
                <div
                  style={{
                    boxSizing: "border-box",
                    marginTop: "1.5em",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                  className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"
                >
                  Kartu Nama <p>{value.name}</p>
                </div>
                <div
                  style={{ padding: "10px" }}
                  className="mt-4 flex justify-between"
                >
                  <div>
                    <h3>
                      <span aria-hidden="true" className="absolute inset-0" />
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Username : {value.username}{" "}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Email : {value.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
