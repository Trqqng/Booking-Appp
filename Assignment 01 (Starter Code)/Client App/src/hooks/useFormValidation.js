import { useState, useCallback } from "react";

const useFormValidation = (fields) => {
  const initialState = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formValues, setFormValues] = useState(initialState);
  const [formErrors, setFormErrors] = useState(initialState);

  const handleFieldChange = useCallback(
    (name, validate) => (e) => {
      const value = e.target.value;
      setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
      const error = validate(value);
      setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    },
    [],
  );

  const handleFieldBlur = useCallback(
    (name, validate) => () => {
      const error = validate(formValues[name]);
      setFormErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    },
    [formValues],
  );

  const validateForm = useCallback(() => {
    let isValid = true;
    const errors = {};
    fields.forEach((field) => {
      const error = field.validate(formValues[field.name]);
      if (error) {
        isValid = false;
        errors[field.name] = error;
      }
    });
    setFormErrors(errors);
    return isValid;
  }, [formValues, fields]);

  const setInitialValues = useCallback((initialValues) => {
    setFormValues((prevValues) => ({ ...prevValues, ...initialValues }));
  }, []);

  return {
    formValues,
    formErrors,
    handleFieldChange,
    handleFieldBlur,
    validateForm,
    setInitialValues,
  };
};

export default useFormValidation;
