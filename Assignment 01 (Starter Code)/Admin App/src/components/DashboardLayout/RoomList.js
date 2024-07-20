import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteRoom } from "../../features/room/roomThunk";
import CheckPasswordComponent from "../checkPassword"; // Đảm bảo đường dẫn này đúng

const RoomList = ({ rooms }) => {
  const roomError = useSelector((state) => state.rooms.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const [roomToDelete, setRoomToDelete] = useState(null);
  const roomsPerPage = 8;

  const handleDelete = (id) => {
    setRoomToDelete(id);
    setShowPasswordCheck(true);
  };

  const handlePasswordCheckSuccess = () => {
    if (roomToDelete) {
      dispatch(deleteRoom(roomToDelete)).then((action) => {
        if (deleteRoom.fulfilled.match(action)) {
          navigate("/");
        }
      });
    }
  };

  const handleEdit = (room) => {
    localStorage.setItem("selectedRoom", JSON.stringify(room));
    navigate(`/add-room?edit=true`);
  };

  const handleAddNew = () => {
    navigate("/add-room");
  };

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom);

  const totalPages = Math.ceil(rooms.length / roomsPerPage);

  return (
    <div className="container mx-auto p-4">
      {roomError && (
        <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
          {roomError}
        </div>
      )}

      <h2 className="text-2xl font-bold mb-4">Rooms List</h2>

      {showPasswordCheck ? (
        <CheckPasswordComponent
          onSuccess={handlePasswordCheckSuccess}
          setShowPasswordCheck={setShowPasswordCheck}
        />
      ) : (
        <>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="w-1/12 px-4 py-2">ID</th>
                <th className="w-1/6 px-4 py-2">Title</th>
                <th className="w-1/3 px-4 py-2">Description</th>
                <th className="w-1/12 px-4 py-2">Hotel</th>
                <th className="w-1/12 px-4 py-2">Price</th>
                <th className="w-1/12 px-4 py-2">Max People</th>
                <th className="w-1/6 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentRooms.map((room) => (
                <tr key={room._id} className="text-center border-b">
                  <td className="px-4 py-2">{room._id}</td>
                  <td className="px-4 py-2">{room.title}</td>
                  <td className="px-4 py-2">{room.desc}</td>
                  <td className="px-4 py-2">{room.hotel.name}</td>
                  <td className="px-4 py-2">{room.price}</td>
                  <td className="px-4 py-2">{room.maxPeople}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleEdit(room)}
                      className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(room._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between mt-4">
            <button
              onClick={handleAddNew}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Add New
            </button>
            <div>
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-gray-300 text-gray-700 px-3 py-1 rounded-l"
              >
                Previous
              </button>
              <span className="bg-gray-300 text-gray-700 px-3 py-1">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="bg-gray-300 text-gray-700 px-3 py-1 rounded-r"
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RoomList;
