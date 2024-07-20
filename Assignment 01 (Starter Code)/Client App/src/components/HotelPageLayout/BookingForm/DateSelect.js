import React from "react";

const DateSelect = React.memo(
  ({
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange,
    handleGetRoomByDate,
    dateErrors,
    validateForm,
  }) => {
    console.log("DateSelect re-render");

    const handleSearchClick = () => {
      const isValid = validateForm();
      if (isValid) {
        handleGetRoomByDate();
      }
    };

    const currentDate = new Date().toISOString().split("T")[0];
    let minEndDate = currentDate;
    if (startDate) {
      const nextDay = new Date(startDate);
      nextDay.setDate(nextDay.getDate() + 1);
      minEndDate = nextDay.toISOString().split("T")[0];
    }

    return (
      <div>
        <div className="flex justify-between mb-6">
          <div>
            <label className="block mb-2">Check-in Date:</label>
            <input
              type="date"
              className={`w-full p-2 border ${
                dateErrors?.startDate ? "border-red-500" : "border-gray-300"
              }`}
              value={startDate}
              onChange={handleStartDateChange}
              min={currentDate}
            />
            {dateErrors?.startDate && (
              <p className="text-red-500">{dateErrors.startDate}</p>
            )}
          </div>
          <div>
            <label className="block mb-2">Check-out Date:</label>
            <input
              type="date"
              className={`w-full p-2 border ${
                dateErrors?.endDate ? "border-red-500" : "border-gray-300"
              }`}
              value={endDate}
              onChange={handleEndDateChange}
              min={minEndDate}
            />
            {dateErrors?.endDate && (
              <p className="text-red-500">{dateErrors.endDate}</p>
            )}
          </div>
        </div>
        <button
          className="bg-blue-500 text-white p-2 rounded-lg mb-6"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
    );
  },
);

export default DateSelect;
