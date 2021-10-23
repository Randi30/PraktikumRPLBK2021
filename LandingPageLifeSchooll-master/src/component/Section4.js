import React from "react";
import botol from "../asset/img/mk5.jpg";
import "../App.css";

export default function Section4() {
  const data = [
    {
      name: "Hana",
      age: "21",
      desc: "Disini banyak sekali hal yang bisa dipelajari, mentornya asik",
    },
    {
      name: "Rinda",
      age: "25",
      desc: "Disini banyak sekali hal yang bisa dipelajari, mentornya asik",
    },
    {
      name: "Syahrul",
      age: "18",
      desc: "Disini banyak sekali hal yang bisa dipelajari, mentornya asik",
    },
    {
      name: "Vika",
      age: "20",
      desc: "Disini banyak sekali hal yang bisa dipelajari, mentornya asik",
    },
    {
      name: "Rogi",
      age: "19",
      desc: "Disini banyak sekali hal yang bisa dipelajari, mentornya asik",
    },
  ];
  return (
    <div className="container-s4 font-fams">
      <div className="">
        <h1 className="title1">Our Testimonials</h1>

        <div className="container-card-sec4">
          {data.map((value) => (
            <div className="card-sec4">
              <img className="image-sec4" width="150" src={botol} />
              <div className="title-card-sec4">
                <h2 className="name-card">{value.name}</h2>
                <p className="age-card">{value.age} Years Old</p>
                <p className="desc-card">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
