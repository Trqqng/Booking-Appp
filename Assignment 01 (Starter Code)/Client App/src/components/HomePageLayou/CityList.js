import React, { useEffect, useState } from "react";
import CityCard from "../Card/CityCard";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const CityList = ({ cities }) => {
  const [ref, isIntersecting] = useIntersectionObserver(0.5);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    if (isIntersecting) {
      cities.forEach((city, index) => {
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, index]);
        }, index * 300);
      });
    }
  }, [isIntersecting, cities]);

  return (
    <div
      ref={ref}
      className="relative w-full min-h-screen bg-center bg-cover py-20 md:min-h-0.5"
      style={{ backgroundImage: "url('/img/bg-img/hero-2.jpg')" }}
    >
      <div
        className="absolute inset-0 bg-opacity-80"
        style={{ backgroundColor: "rgba(14, 2, 35, 0.9)" }}
      ></div>
      <div className="relative container mx-auto sm:p-4 md:p-6 lg:px-8 xl:px-16">
        <h2 className="text-3xl mb-4 text-center text-white">
          Cities You Must See
        </h2>
        <p className="text-center text-white mb-8">Editor's pick</p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            {cities.map((city, index) => (
              <CityCard
                key={index}
                city={city}
                isVisible={visibleCards.includes(index)}
                specialCard={index === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityList;
