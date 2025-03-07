import React, { useState } from "react";
import Header from "./header";
import { useLocation, useNavigate } from "react-router-dom";
import Breadcrumps from "./breadcrumps";

const Detail = () => {
  const [value, setValue] = useState(1);
  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => setValue((prev) => (prev > 0 ? prev - 1 : 0));
  const bodyStyle = {
    fontFamily: '"Source Code Pro", monospace',
    fontStyle: "normal",
    fontWeight: 300,
    textTransform: "none",
    letterSpacing: "0em",
    lineHeight: "1.7em",
  };
  const bodyStyle2 = {
    fontFamily: '"Abel", ',
    fontStyle: "normal",
    fontWeight: 400,
    textTransform: "none",
    letterSpacing: "0em",
    lineHeight: "1.7em",
  };

  const location = useLocation();
  const navigate = useNavigate();
  const { src, label, price, para, para2 } = location.state || {};

  if (!src || !label) {
    return <p>No data available</p>;
  }

  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="lg:p-7 p-5 w-full">
        <div className="md:mt-28 mt-4 py-4 md:text-lg text-sm">
          <Breadcrumps b1="Prints" b2={label} link="/print" />
        </div>
        <div className="flex lg:flex-row flex-col gap-10 ">
          <img src={src} alt={label} className="lg:w-1/2 h-auto" />
          <div className="flex flex-col justify-center gap-5 w-full" style={bodyStyle}>
            <h1 className="text-4xl font-bold my-5">{label}</h1>
            <div className="flex flex-row gap-2 mt-2 text-2xl items-center">
              <p className="font-medium">
              £{price}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="my-4">{para}</p>
              <p>{para2}</p>
            </div>
            <div className="mt-5">
              <label className="font-semibold" htmlFor="Size">
                Size:
              </label>
              <div class="relative w-10/12">
                <select class="block w-full appearance-none border border-gray-300 bg-white px-4 py-5 pr-10 text-gray-700 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200">
                  <option value="option1">A4</option>
                  <option value="option2">A3</option>
                  <option value="option3">A2</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-start mt-9">
                <label
                  htmlFor="quantity"
                  className="mb-2 font-medium"
                >
                  Quantity:
                </label>
                <div className="relative group">
                  <input
                    id="quantity"
                    type="number"
                    value={value}
                    readOnly
                    className="border border-gray-300 rounded-md w-24 text-center p-5 text-black"
                  />
                  <div className="absolute inset-y-3 right-2 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <button
                      onClick={increment}
                      className="bg-gray-100 text-gray-700 border-b border-gray-300 px-1 py-0.5 text-sm hover:bg-gray-200"
                    >
                      ▲
                    </button>
                    <button
                      onClick={decrement}
                      className="bg-gray-100 text-gray-700 px-1 text-sm hover:bg-gray-200"
                    >
                      ▼
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-9">
                <button className="w-full border-2 bg-transparent font-semibold text-[#8da4cc] border-[#8da4cc] py-5 hover:bg-[#253551] hover:border-[#8da4cc] hover:text-white">
                    Add to cart
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
