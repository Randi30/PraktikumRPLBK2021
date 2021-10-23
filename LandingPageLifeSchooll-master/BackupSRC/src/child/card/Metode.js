import React from "react";
import supra from "../../asset/img/mk5.jpg";
import "./child.css";

const Metode = () => {
  // const { isNameBold } = props;

  const data = [
    {
      name: "Supra I",
      pcs: "30 of 50",
      harga: "4.000.000.000",
      image: supra,
    },
    {
      name: "Supra II",
      pcs: "23 of 50",
      harga: "4.500.000.000",
      image: supra,
    },
    {
      name: "Supra III",
      pcs: "10 of 50",
      harga: "9.000.000.000",
      image: supra,
    },
    {
      name: "Supra IV",
      pcs: "14 of 50",
      harga: "8.240.000.000",
      image: supra,
    },
    {
      name: "Supra V",
      pcs: "14 of 50",
      harga: "8.240.000.000",
      image: supra,
    },
  ];
  return (
    <div>
      {/* Section 2 */}
      <div className="container-card">
        {data.map(({ name, pcs, harga, image }) => (
          <div>
            <div className="space-card">
              <div className="group relative shadow">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={image}
                    alt="Gambar"
                    className="imagess w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div
                  style={{ padding: "20px" }}
                  className="mt-4 flex justify-between"
                >
                  <div>
                    <h3
                    // className={`${
                    //   isNameBold ? "font-bold " : ""
                    // } text-sm text-gray-700`}
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Rp. {harga}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Tersisa : {pcs}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Section 2 end */}
    </div>
  );
};

export default Metode;
