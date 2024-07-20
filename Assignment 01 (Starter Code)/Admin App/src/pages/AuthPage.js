import React from "react";
import FormLogin from "../components/LoginPageUI";
import { loginThunk } from "../features/auth/authThunks";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (formData) => {
    dispatch(loginThunk(formData)).then((action) => {
      if (loginThunk.fulfilled.match(action)) {
        localStorage.setItem("token", action.payload.token);
        navigate("/");
      }
    });
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <FormLogin handleSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;
