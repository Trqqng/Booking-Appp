import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchHotelById } from "../features/hotel/hotelThunk";
import HotelDetailUI from "../components/HotelPageLayout/HotelDetailUI"; // Kiểm tra đường dẫn import
import { createTransactionThunk } from "../features/transaction/transactionThunk";

const HotelPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const hotelDetails = useSelector((state) => state.hotels.hotel);
  const status = useSelector((state) => state.hotels.status);
  const error = useSelector((state) => state.hotels.error);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const closeFormRef = useRef(null);

  useEffect(() => {
    if (!hotelDetails || hotelDetails._id !== id) {
      dispatch(fetchHotelById(id));
    }
  }, [id]);

  const handleBooking = async (formData) => {
    if (!user) {
      navigate("/auth");
      alert("Plase login before booking");
    } else {
      console.log("user", user);
      await dispatch(createTransactionThunk(formData)).then((action) => {
        if (createTransactionThunk.fulfilled.match(action)) {
          navigate("/");
        } else {
          if (closeFormRef.current) {
            closeFormRef.current();
          }
          alert("Something went wrong when you booking please try again");
        }
      });
    }
  };

  const handleCloseForm = (closeForm) => {
    closeFormRef.current = closeForm;
  };

  if (status === "loading") {
    console.log("loading");
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error loading hotel details: {error}</p>;
  }

  if (!hotelDetails) {
    return <p>No hotel details found.</p>;
  }

  return (
    <HotelDetailUI
      hotel={hotelDetails}
      onReverseClick={handleBooking}
      handleCloseForm={handleCloseForm} // Truyền prop handleCloseForm
    />
  );
};

export default HotelPage;
