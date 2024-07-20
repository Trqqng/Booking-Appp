import React, { useEffect, useState } from "react";
import SelectCard from "../Card/SelectCard";
import cardsData from "../Card/cards.json";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const SelectCardList = ({ className }) => {
  const [ref, isIntersecting] = useIntersectionObserver(0.9);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    if (isIntersecting) {
      cardsData.forEach((card, index) => {
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, index]);
        }, index * 50);
      });
    }
  }, [isIntersecting]);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 w-full sm:grid-cols-2 gap-5 p-12 sm:flex sm:justify-center sm:gap-0 md:py-0  ${className}`}
    >
      {cardsData.map((card, index) => (
        <SelectCard
          key={index}
          icon={card.icon}
          title={card.title}
          isVisible={visibleCards.includes(index)}
          isFullWidth={index === 4}
        />
      ))}
    </div>
  );
};

export default SelectCardList;
