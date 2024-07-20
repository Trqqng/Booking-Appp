import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { fetchRoomByDate } from "../../features/room/roomThunk";
import validate from "../../ulit/validate";

const useBookingForm = (hotelId) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();

  const handleFieldChange = useCallback(
    (name, validate) => (e) => {
      const value = e.target.value;
      setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
      const error = validate ? validate(value) : "";
      setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    },
    [],
  );

  const handleFieldBlur = useCallback(
    (name, validate) => () => {
      const error = validate ? validate(formValues[name]) : "";
      setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    },
    [formValues],
  );

  const handleGetRoomByDate = useCallback(() => {
    console.log("Hotel ID:", hotelId);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    dispatch(fetchRoomByDate({ hotelId, startDate, endDate }));
  }, [dispatch, hotelId, startDate, endDate]);

  const handleReverse = useCallback(() => {
    const isValid = validateForm();
    if (!isValid) {
      console.log("Form validation failed");
      return;
    }
    const formData = {
      hotelId,
      startDate,
      endDate,
      ...formValues,
    };
    console.log("Form Data to submit:", formData);
  }, [formValues, startDate, endDate, hotelId]);

  const validateForm = useCallback(() => {
    const fields = [
      { name: "fullName", validate: validate.fullName },
      { name: "email", validate: validate.email },
      { name: "phoneNumber", validate: validate.phoneNumber },
      { name: "cardNumber", validate: validate.phoneNumber },
    ];
    let isValid = true;
    const errors = {};

    // Validate fields
    fields.forEach((field) => {
      const error = field.validate(formValues[field.name]);
      if (error) {
        isValid = false;
        errors[field.name] = error;
      }
    });

    // Validate dates
    if (!startDate) {
      isValid = false;
      errors.startDate = "Check-in date is required";
    }
    if (!endDate) {
      isValid = false;
      errors.endDate = "Check-out date is required";
    }

    setFormErrors(errors);
    return isValid;
  }, [formValues, startDate, endDate]);

  return {
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    formValues,
    formErrors,
    handleFieldChange,
    handleFieldBlur,
    handleGetRoomByDate,
    handleReverse,
    validateForm, // Export validateForm
  };
};

export default useBookingForm;
