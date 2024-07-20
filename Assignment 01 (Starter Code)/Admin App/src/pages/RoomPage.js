import React, { useState } from "react";
import RoomFormUI from "../components/RoomPageLayout/RoomFormUI";
import { useLoaderData, useNavigate } from "react-router-dom";
import hotelService from "../services/hotelService";
import { createRoom, updateRoom } from "../features/room/roomThunk";
import { useDispatch } from "react-redux";

const RoomPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useLoaderData();
  const [errors, setErrors] = useState({}); // State to manage errors
  const handleSubmit = async (formData, isEdit) => {
    try {
      if (!isEdit) {
        const action = await dispatch(createRoom(formData));
        if (createRoom.fulfilled.match(action)) {
          navigate("/");
        } else {
          const errorMessage = action.payload?.message || "An error occurred";
          setErrors({ submit: errorMessage });
        }
      } else {
        const action = await dispatch(updateRoom(formData));
        if (updateRoom.fulfilled.match(action)) {
          navigate("/");
        } else {
          const errorMessage = action.payload?.message || "An error occurred";
          setErrors({ submit: errorMessage });
        }
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      setErrors({ submit: error.message });
    }
  };

  return (
    <div>
      <RoomFormUI
        hotels={data.hotels}
        onSubmit={handleSubmit}
        submitErrors={errors}
      />
    </div>
  );
};

export default RoomPage;

export async function roomPageLoader() {
  try {
    const hotels = await hotelService.getAllHotels();
    if (hotels) {
      return { hotels: hotels };
    } else console.log("Cant fetch hotels");
  } catch (error) {
    console.error(error);
  }
}
