// HotelDetailUI.js
import React, { useState, useEffect } from "react";
import Navbar from "../Layout/Navbar";
import HotelDetailCard from "../Card/HotelCard/HotelDetailCard";
import BookingForm from "./BookingForm";

const HotelDetailUI = ({ hotel, onReverseClick, handleCloseForm }) => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const handleReversBookClick = () => {
    if (isOpenForm) {
      setAnimationClass("form-close");
      setTimeout(() => setIsOpenForm(false), 500); // Match the duration of the closing animation
    } else {
      setIsOpenForm(true);
      setAnimationClass("form-open");
    }
  };

  const closeForm = () => {
    setAnimationClass("form-close");
    setTimeout(() => setIsOpenForm(false), 500); // Match the duration of the closing animation
  };

  useEffect(() => {
    const styleSheet = document.styleSheets[0];

    const keyframesOpen = `@keyframes scaleUp {
        0% {
          transform: scale(0.5);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }`;

    const keyframesClose = `@keyframes scaleDown {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        100% {
          transform: scale(0.5);
          opacity: 0;
        }
      }`;

    const formOpenClass = `.form-open {
        animation: scaleUp 0.5s ease-in-out forwards;
      }`;

    const formCloseClass = `.form-close {
        animation: scaleDown 0.5s ease-in-out forwards;
      }`;

    styleSheet.insertRule(keyframesOpen, styleSheet.cssRules.length);
    styleSheet.insertRule(keyframesClose, styleSheet.cssRules.length);
    styleSheet.insertRule(formOpenClass, styleSheet.cssRules.length);
    styleSheet.insertRule(formCloseClass, styleSheet.cssRules.length);
  }, []);

  useEffect(() => {
    if (handleCloseForm) {
      handleCloseForm(closeForm);
    }
  }, [handleCloseForm]);

  return (
    <div
      className="relative w-full min-h-screen bg-center bg-cover py-20 md:min-h-screen"
      style={{ backgroundImage: "url('/img/bg-img/hero-2.jpg')" }}
    >
      <div
        className="absolute inset-0 bg-opacity-80"
        style={{ backgroundColor: "rgba(14, 2, 35, 0.9)" }}
      ></div>
      <div className="relative container mx-auto">
        <Navbar />
        {!isOpenForm && (
          <div className="mt-20">
            <HotelDetailCard
              hotel={hotel}
              reverseOrBookClick={handleReversBookClick}
            />
          </div>
        )}
        {isOpenForm && (
          <div className={animationClass}>
            <BookingForm
              onReverseClick={onReverseClick}
              hotel={hotel}
              reverseOrBookClick={handleReversBookClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelDetailUI;
