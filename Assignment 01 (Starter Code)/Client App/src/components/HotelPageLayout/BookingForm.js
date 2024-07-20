import React, { useCallback } from "react";
import RoomList from "./BookingForm/RoomList";
import UserDetail from "./BookingForm/UserDetail";
import DateSelect from "./BookingForm/DateSelect";
import HotelInfo from "./BookingForm/HotelInfo";
import { useSelector } from "react-redux";
import useDateSelect from "../../hooks/bookingHook/useDateSelect";
import useRoomList from "../../hooks/bookingHook/useRoomList";
import useFormValidation from "../../hooks/useFormValidation";
import validate from "../../ulit/validate";

const BookingForm = ({ hotel, reverseOrBookClick, onReverseClick }) => {
  console.log("BookingForm re-render");

  const {
    isSearching,
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange,
    handleGetRoomByDate,
    validateForm: validateDateForm,
    dateErrors,
    numDays,
  } = useDateSelect(hotel._id);

  const fields = [
    { name: "fullName", validate: validate.fullName },
    { name: "email", validate: validate.email },
    { name: "phoneNumber", validate: validate.phoneNumber },
    { name: "cardNumber", validate: validate.phoneNumber },
  ];

  const {
    formValues,
    formErrors,
    handleFieldChange,
    handleFieldBlur,
    validateForm: validateUserForm,
    setInitialValues,
  } = useFormValidation(fields);

  const fetchedRooms = useSelector((state) => state.rooms.rooms);
  const user = useSelector((state) => state.auth.user);

  const {
    totalPrice,
    dividedRooms,
    selectedRooms,
    handleRoomSelect,
    roomErrors,
    validateRooms,
    isRoomSelected,
  } = useRoomList(fetchedRooms, 3); // Sử dụng fetchedRooms trực tiếp

  const handleReverse = useCallback(() => {
    const isDateValid = validateDateForm();
    const isUserValid = validateUserForm();
    const isRoomValid = validateRooms();
    if (!isDateValid || !isUserValid || !isRoomValid) {
      console.log("Form validation failed");
      return;
    }
    const formData = {
      user: user ? user.userId : "",
      hotel: hotel._id,
      rooms: selectedRooms.map((room) => ({
        room: room.room,
        roomNumber: room.roomNumber,
      })),
      dateStart: startDate,
      dateEnd: endDate,
      price: totalPrice * numDays,
      payment: "Credit Card",
      status: "Booked",
      paymentDetails: {
        cardNumber: formValues.cardNumber,
        expiryDate: "12/25",
        cvv: "123",
      },
      guestName: formValues.fullName,
      guestEmail: formValues.email,
      guestPhone: formValues.phoneNumber,
    };

    onReverseClick(formData);

    console.log("Form Data to submit:", formData);
  }, [
    formValues,
    startDate,
    endDate,
    hotel._id,
    validateDateForm,
    validateUserForm,
    validateRooms,
    selectedRooms,
    totalPrice,
    user,
    numDays,
  ]);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <HotelInfo hotel={hotel} reverseOrBookClick={reverseOrBookClick} />
        <DateSelect
          startDate={startDate}
          endDate={endDate}
          handleStartDateChange={handleStartDateChange}
          handleEndDateChange={handleEndDateChange}
          handleGetRoomByDate={handleGetRoomByDate}
          dateErrors={dateErrors}
          validateForm={validateDateForm}
        />

        <div className="grid grid-cols-4 gap-10">
          <UserDetail
            formValues={formValues}
            formErrors={formErrors}
            handleFieldChange={handleFieldChange}
            handleFieldBlur={handleFieldBlur}
            setInitialValues={setInitialValues}
          />
          {!isSearching && (
            <div className="flex col-span-3 justify-center items-center text-3xl text-gray-400 mb-32">
              Please select date
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                />
              </svg>
            </div>
          )}
          {isSearching &&
            dividedRooms.map((part, index) => (
              <RoomList
                key={index}
                title={"Select Room"}
                part={part}
                isNot={index === 0}
                isSearching={isSearching}
                handleRoomSelect={(roomId, roomNumberId, roomPrice) =>
                  handleRoomSelect(roomId, roomNumberId, roomPrice)
                }
                isRoomSelected={isRoomSelected}
              />
            ))}
        </div>

        {roomErrors && <p className="text-red-500">{roomErrors}</p>}

        <div className="">
          <h2 className="text-xl">Total Bill: ${totalPrice * numDays}</h2>
          <select className="w-full p-2 border border-gray-300 mb-4">
            <option>Select Payment Method</option>
            <option>Credit Card</option>
            <option>PayPal</option>
            <option>Bank Transfer</option>
          </select>
          <button
            className="bg-blue-500 text-white p-2 rounded-lg w-full"
            onClick={handleReverse}
          >
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
