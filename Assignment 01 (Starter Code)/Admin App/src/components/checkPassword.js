import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkPasswordThunk } from "../features/auth/authThunks"; // Đảm bảo đường dẫn này đúng
import { clearError } from "../features/auth/authSlice";

const CheckPasswordComponent = ({ onSuccess, setShowPasswordCheck }) => {
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const authError = useSelector((state) => state.auth.error);

  const handleCheckPassword = async () => {
    await dispatch(checkPasswordThunk(password)).then((action) => {
      if (checkPasswordThunk.fulfilled.match(action)) {
        onSuccess();
        setShowPasswordCheck(false);
      }
    });
  };

  useEffect(() => {
    if (authError) {
      alert(authError);
      dispatch(clearError());
    }
  }, [authError, dispatch]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Check Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <div className="flex justify-center gap-10">
          <button
            onClick={() => setShowPasswordCheck(false)} // Sửa lỗi này
            className="w-1/2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Back
          </button>
          <button
            onClick={handleCheckPassword}
            className="w-1/2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Check Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckPasswordComponent;
