import React, { useEffect, useState } from "react";
import useRoomForm from "../../hooks/useRoomForm";
import MainInformation from "./MainInformation";
import MoreInformation from "./MoreInformation";
import { useLocation } from "react-router-dom";
import CheckPasswordComponent from "../checkPassword"; // Đảm bảo đường dẫn này đúng

const RoomFormUI = ({ hotels, onSubmit, submitErrors }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isEdit = queryParams.get("edit") === "true";
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);

  const {
    formData,
    errors,
    setErrors,
    validate,
    handleChange,
    setFormData,
    resetForm, // Add resetForm from useRoomForm hook
  } = useRoomForm({
    title: "",
    desc: "",
    price: "",
    maxPeople: "",
    rooms: "",
    hotel: "",
    size: "",
    bedType: "",
    view: "",
  });

  useEffect(() => {
    if (isEdit) {
      const storedRoom = localStorage.getItem("selectedRoom");
      if (storedRoom) {
        const parseRoom = JSON.parse(storedRoom);
        console.log(parseRoom);
        setFormData({
          ...parseRoom,
          hotel: parseRoom.hotel._id,
          rooms: parseRoom.roomNumbers.map((room) => room.number).join(" "),
        });
      }
    }
  }, [isEdit, setFormData]);

  const onSubmitButton = (e) => {
    e.preventDefault();

    if (validate()) {
      setShowPasswordCheck(true);
    }
  };

  const handlePasswordCheckSuccess = () => {
    setShowPasswordCheck(false);
    const data = {
      ...formData,
      available: true,
      roomNumbers: formData.rooms.split(" ").map((room) => ({
        number: parseInt(room, 10),
        available: true,
        bookings: [],
      })),
    };
    onSubmit(data, isEdit);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">
        {isEdit ? "Update Room" : "Add New Room"}
      </h2>
      {submitErrors.submit && (
        <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
          {typeof submitErrors.submit === "string"
            ? submitErrors.submit
            : "An error occurred"}
        </div>
      )}
      {showPasswordCheck ? (
        <CheckPasswordComponent
          onSuccess={handlePasswordCheckSuccess}
          setShowPasswordCheck={setShowPasswordCheck}
        />
      ) : (
        <form
          onSubmit={onSubmitButton}
          className="bg-white p-4 rounded shadow-md"
        >
          <div className="grid grid-cols-2 gap-4">
            <MainInformation
              hotels={hotels}
              errors={errors}
              formData={formData}
              handleChange={handleChange}
            />
            <MoreInformation
              errors={errors}
              formData={formData}
              handleChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            {isEdit ? "Update" : "Send"}
          </button>
        </form>
      )}
    </div>
  );
};

export default RoomFormUI;
