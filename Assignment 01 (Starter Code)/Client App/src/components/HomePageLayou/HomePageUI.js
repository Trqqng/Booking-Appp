import React from "react";

const HomePageUI = () => {
  return (
    <div
      className="relative w-auto h-screen bg-center bg-cover"
      style={{ backgroundImage: "url('/img/bg-img/hero-1.jpg')" }}
    >
      <div
        className="absolute inset-0 bg-opacity-50"
        style={{ backgroundColor: "rgba(14, 2, 35, 0.6)" }}
      ></div>
      <header className="absolute transform -rotate-90 origin-left top-1/2 -translate-y-1/2 left-5 text-white hidden lg:block"></header>
      <div className="relative z-10 text-white text-center flex flex-col items-center justify-center h-full ">
        <div className="flex flex-col items-start text-center ">
          <h1 className="text-4xl md:text-6xl">Discover places near you</h1>
          <p className="mt-4 text-lg sm:text-xl">
            This is the best guide of your city
          </p>
        </div>
        <div className="grid grid-cols-1 mt-8  text-sm w-full max-w-sm lg:max-w-3xl md:max-w-2xl ">
          <div
            className="flex w-1/2 items-start md:w-1/3  md:w-30p lg:w-1/4"
            style={{ backgroundColor: "rgba(67, 25, 161, 0.65)" }}
          >
            <button className="px-4 py-2 border-b-4 border-blue-600 text-white">
              Places
            </button>
            <button className="px-4 py-2 text-white">Events</button>
          </div>
          <div
            className="flex flex-col items-start justify-center gap-4 p-4 pb-3 w-full "
            style={{ backgroundColor: "rgba(67, 25, 161, 0.65)" }}
          >
            <p>What are you looking for</p>
            <div className="flex flex-col md:flex-row gap-2 w-full">
              <select className="p-2 border rounded text-[0.6rem] text-black w-full">
                <option value="" disabled selected hidden>
                  Your Destinations
                </option>
                <option value="destination1">Destination 1</option>
                <option value="destination2">Destination 2</option>
                <option value="destination3">Destination 3</option>
              </select>

              <select className="p-2 border rounded text-[0.6rem] text-black w-full">
                <option value="" disabled selected hidden>
                  All Categories
                </option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </select>

              <select className="p-2 border rounded text-[0.6rem] text-black w-full">
                <option value="" disabled selected hidden>
                  Price Range
                </option>
                <option value="range1">$0 - $50</option>
                <option value="range2">$50 - $100</option>
                <option value="range3">$100 - $200</option>
              </select>

              <button
                type="submit"
                className="p-2 bg-blue-600 text-white rounded w-full"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageUI;
