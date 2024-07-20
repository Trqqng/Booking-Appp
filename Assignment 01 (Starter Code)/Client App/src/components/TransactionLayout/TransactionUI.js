import roomSlice from "../../features/room/roomSlice";
import React from "react";
import Navbar from "../Layout/Navbar";

const TransactionUI = ({ transactions }) => {
  console.log(transactions);

  return (
    <div
      className="relative w-full min-h-screen bg-center bg-cover py-20 md:min-h-screen"
      style={{ backgroundImage: "url('/img/bg-img/hero-3.jpg')" }}
    >
      <div
        className="absolute inset-0 bg-opacity-80"
        style={{ backgroundColor: "rgba(14, 2, 35, 0.9)" }}
      ></div>
      <div className="container relative mx-auto overflow-x-auto">
        <Navbar />
        <div className="mt-20 text-center">
          <div className="text-3xl mb-10 text-white">
            Here is your Transaction:{" "}
          </div>
          <table className=" bg-white table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-green-300">
                <th className="border border-gray-300 px-4 py-2">#</th>
                <th className="border border-gray-300 px-4 py-2">Hotel</th>
                <th className="border border-gray-300 px-4 py-2">Room</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">
                  Payment Method
                </th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={transaction._id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {transaction.hotel.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {transaction.rooms.map((room, roomIndex) => (
                      <span key={room._id}>
                        {room.roomNumberDetail.number}
                        {roomIndex < transaction.rooms.length - 1 && ", "}
                      </span>
                    ))}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(transaction.dateStart).toLocaleDateString()} -{" "}
                    {new Date(transaction.dateEnd).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${transaction.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {transaction.payment}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded-full ${getStatusClass(transaction.status)}`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const getStatusClass = (status) => {
  switch (status) {
    case "Booked":
      return "bg-red-200 text-red-700";
    case "Checkin":
      return "bg-green-200 text-green-700";
    case "Checkout":
      return "bg-purple-200 text-purple-700";
    case "Cancelled":
      return "bg-gray-200 text-gray-700";
    default:
      return "";
  }
};

export default TransactionUI;
