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
  const data1 = [
    { Nama: "Randi", Nim: "21120118130069" },
    { Nama: "Tedy", Nim: "21120117130055" },
  ];

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
    <div className="conta-card">
      {data.map((value) => (
        <div style={{}}>
          <div className="card-margin">
            <div
              className="group relative shadow box-card"
              onClick={() => details(value)}
            >
              <div className=" title-card w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
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
  );
}
