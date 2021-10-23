import React from "react";
import supra from "../../asset/img/mk5.jpg";
import "./child.css";

const Metode = () => {
  // const { isNameBold } = props;

  const data = [
    {
      name: "Memberikan pelayanan yang efisien",
      harga:
        "Melayani pelanggan berikutnya segera setelah selesai dengan pelanggan pertama",
      image: supra,
    },
    {
      name: "Memberikan pelayanan yang efisien",
      harga:
        "Melayani pelanggan berikutnya segera setelah selesai dengan pelanggan pertama",
      image: supra,
    },
    {
      name: "Memberikan pelayanan yang efisien",
      harga:
        "Melayani pelanggan berikutnya segera setelah selesai dengan pelanggan pertama",
      image: supra,
    },
    {
      name: "Memberikan pelayanan yang efisien",
      harga:
        "Melayani pelanggan berikutnya segera setelah selesai dengan pelanggan pertama",
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
                    <p className="mt-1 text-sm text-gray-500">{harga}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{pcs}</p>
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
