import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteHotel } from "../../features/hotel/hotelThunk"; // Đường dẫn này có thể thay đổi tùy vào cấu trúc dự án của bạn
import CheckPasswordComponent from "../checkPassword"; // Đảm bảo đường dẫn này đúng

const HotelList = ({ hotels }) => {
  const hotelError = useSelector((state) => state.hotels.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const [hotelToDelete, setHotelToDelete] = useState(null);

  const handleUpdate = (hotel) => {
    localStorage.setItem("selectedHotel", JSON.stringify(hotel));
    navigate(`/add-hotel?edit=true`);
  };

  const handleDelete = (hotelId) => {
    setHotelToDelete(hotelId);
    setShowPasswordCheck(true);
  };

  const handlePasswordCheckSuccess = () => {
    if (hotelToDelete) {
      dispatch(deleteHotel(hotelToDelete)).then((action) => {
        if (deleteHotel.fulfilled.match(action)) {
          navigate("/");
        }
      });
    }
    setShowPasswordCheck(false);
  };

  return (
    <div className="container mx-auto p-4">
      {hotelError ? (
        <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
          {hotelError}
        </div>
      ) : (
        <div className="text-white">Nothing</div>
      )}
      <h2 className="text-2xl font-bold mb-4">Hotels List</h2>
      {showPasswordCheck ? (
        <CheckPasswordComponent
          onSuccess={handlePasswordCheckSuccess}
          setShowPasswordCheck={setShowPasswordCheck}
        />
      ) : (
        <>
          <table className="min-w-full bg-white border border-gray-200 text-center">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Type</th>
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">City</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {hotels.map((hotel) => (
                <tr key={hotel._id}>
                  <td className="py-2 px-4 border-b">{hotel._id}</td>
                  <td className="py-2 px-4 border-b">{hotel.name}</td>
                  <td className="py-2 px-4 border-b">{hotel.type.name}</td>
                  <td className="py-2 px-4 border-b">{hotel.title}</td>
                  <td className="py-2 px-4 border-b">{hotel.city.name}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      className="text-red-500 hover:text-red-700 mr-2"
                      onClick={() => handleDelete(hotel._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleUpdate(hotel)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            onClick={() => navigate("/add-hotel")}
          >
            Add New
          </button>
        </>
      )}
    </div>
  );
};

export default HotelList;
