import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginThunk, registerThunk } from "../features/auth/authThunks";
import { clearError } from "../features/auth/authSlice";
import AuthFormUI from "../components/User/AuthFormUI";
import validate from "../ulit/validate";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authError = useSelector((state) => state.auth.error);

  useEffect(() => {
    dispatch(clearError());
  }, [isLogin, dispatch]);

  const handleSubmit = useCallback(
    (formData) => {
      const thunk = isLogin ? loginThunk : registerThunk;
      dispatch(thunk(formData)).then((action) => {
        if (action.type === thunk.fulfilled.toString()) {
          if (isLogin) {
            navigate("/");
          } else {
            setIsLogin(true);
            navigate("/auth");
            alert("Register successful");
          }
        }
      });
    },
    [dispatch, isLogin, navigate],
  );

  const fields = useMemo(
    () => [
      {
        name: "email",
        label: "Email",
        type: "text",
        placeholder: "Enter your email",
        validate: validate.email,
      },
      {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "Enter your password",
        validate: validate.password,
      },
      {
        name: "confirmPassword",
        label: "Confirm Password",
        type: "password",
        placeholder: "Confirm your password",
        validate: validate.password,
      },
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        placeholder: "Enter your full name",
        validate: validate.fullName,
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "text",
        placeholder: "Enter your phone number",
        validate: validate.phoneNumber,
      },
    ],
    [],
  );

  return (
    <AuthFormUI
      handleSubmit={handleSubmit}
      error={authError}
      formType={isLogin ? "Login" : "Register"}
      fields={isLogin ? fields.slice(0, 2) : fields}
      setIsLogin={setIsLogin}
    />
  );
};

export default AuthPage;
