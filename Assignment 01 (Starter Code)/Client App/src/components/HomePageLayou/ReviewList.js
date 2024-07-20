import React, { useEffect, useState } from "react";
import ReviewCard from "../Card/ReviewCard";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const ReviewList = ({ users }) => {
  const [ref, isIntersecting] = useIntersectionObserver(0.5);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    if (isIntersecting) {
      users.forEach((user, index) => {
        setTimeout(() => {
          setVisibleCards((prev) => [...prev, index]);
        }, index * 100);
      });
    }
  }, [isIntersecting, users]);

  return (
    <div
      ref={ref}
      className="relative w-full bg-center bg-cover pt-10 lg:pr-40 lg:pl-40 lg:pb-20"
      style={{ backgroundImage: "url('/img/bg-img/hero-3.jpg')" }}
    >
      <div
        className="absolute inset-0 bg-opacity-80"
        style={{ backgroundColor: "rgba(14, 2, 35, 0.9)" }}
      ></div>
      <div className="relative mx-auto">
        <div className="text-3xl mb-2 text-center text-white">
          About our reviews
        </div>
        <p className="text-center text-white mb-20">Editor's pick</p>
        <div className="grid grid-cols-1 sm:grid-cols-1 sm:px-4 md:grid-cols-2 md:px-8 lg:px-auto gap-5">
          {users.map((user, index) => (
            <ReviewCard
              key={index}
              user={user}
              isVisible={visibleCards.includes(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
