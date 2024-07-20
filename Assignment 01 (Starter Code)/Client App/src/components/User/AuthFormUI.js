import React from "react";
import Navbar from "../Layout/Navbar";
import InputField from "../Card/InputField";
import useFormValidation from "../../hooks/useFormValidation";

const AuthFormUI = ({ handleSubmit, error, formType, fields, setIsLogin }) => {
  const {
    formValues,
    formErrors,
    handleFieldChange,
    handleFieldBlur,
    validateForm,
  } = useFormValidation(fields);

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSubmit(formValues);
    } else {
      console.log("Có lỗi xác thực, biểu mẫu không được gửi.");
    }
  };

  const bgImage = "url('/img/bg-img/hero-2.jpg')";
  const bgColor = "rgba(14, 2, 35, 0.9)";

  return (
    <div
      className="relative w-full h-screen bg-center bg-cover"
      style={{ backgroundImage: bgImage }}
    >
      <Navbar />
      <div
        className="absolute inset-0 bg-opacity-50"
        style={{ backgroundColor: bgColor }}
      ></div>
      <div className="relative container mx-auto flex items-center justify-center min-h-screen">
        <form
          className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md mb-15"
          onSubmit={onSubmit}
        >
          {formType !== "Register" && (
            <h2
              className="text-2xl font-bold mb-6 text-center"
              style={{ color: "#7643ea" }}
            >
              Welcome to Booking App
            </h2>
          )}
          <h2
            className="text-2xl font-bold mb-6 text-center"
            style={{ color: "#7643ea" }}
          >
            {formType}
          </h2>

          {fields.map((field) => (
            <InputField
              key={field.name}
              label={field.label}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={formValues[field.name]}
              error={formErrors[field.name]}
              handleChange={handleFieldChange(field.name, field.validate)}
              handleBlur={handleFieldBlur(field.name, field.validate)}
            />
          ))}

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              style={{ backgroundColor: "#7643ea" }}
            >
              {formType}
            </button>
            <div className="text-red-500 mr-10">{error}</div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-700">
              {formType === "Login" ? (
                <>
                  Don't have an account yet?{" "}
                  <button
                    type="button"
                    className="text-blue-500 hover:text-blue-700 font-bold"
                    onClick={() => setIsLogin(false)}
                    style={{ color: "#7643ea" }}
                  >
                    Register
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="text-blue-500 hover:text-blue-700 font-bold"
                    onClick={() => setIsLogin(true)}
                    style={{ color: "#7643ea" }}
                  >
                    Login
                  </button>
                </>
              )}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthFormUI;
