import { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRoomByDate } from "../../features/room/roomThunk";

const useDateSelect = (hotelId) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dateErrors, setDateErrors] = useState({});
  const [isSearching, setIsSearching] = useState(false);
  const [numDays, setNumDays] = useState(0); // Thêm state để lưu số ngày
  const dispatch = useDispatch();

  const handleStartDateChange = useCallback((e) => {
    const value = e.target.value;
    setStartDate(value);
    setIsSearching(false);
    setEndDate(""); // Reset endDate khi startDate thay đổi
    setDateErrors((prevErrors) => ({
      ...prevErrors,
      startDate: "",
      endDate: "",
    }));
  }, []);

  const handleEndDateChange = useCallback((e) => {
    const value = e.target.value;
    setIsSearching(false);
    setEndDate(value);
    setDateErrors((prevErrors) => ({ ...prevErrors, endDate: "" }));
  }, []);

  const handleGetRoomByDate = useCallback(() => {
    console.log("Hotel ID:", hotelId);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    dispatch(fetchRoomByDate({ hotelId, startDate, endDate })).then(
      setIsSearching(true),
    );
  }, [dispatch, hotelId, startDate, endDate]);

  const validateForm = useCallback(() => {
    console.log("checkValidate");
    const errors = {};
    let isValid = true;
    const currentDate = new Date().toISOString().split("T")[0];

    if (!startDate) {
      isValid = false;
      errors.startDate = "Check-in date is required";
    } else if (startDate <= currentDate) {
      isValid = false;
      errors.startDate = "Check-in date must be in the future";
    }
    if (!endDate) {
      isValid = false;
      errors.endDate = "Check-out date is required";
    }
    setDateErrors(errors);
    return isValid;
  }, [startDate, endDate]);

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNumDays(diffDays);
    } else {
      setNumDays(0);
    }
  }, [startDate, endDate]);

  return {
    isSearching,
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange,
    handleGetRoomByDate,
    dateErrors,
    validateForm,
    numDays,
  };
};

export default useDateSelect;
