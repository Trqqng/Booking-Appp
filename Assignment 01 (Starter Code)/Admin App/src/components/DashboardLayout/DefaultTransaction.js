import React from "react";

const DefaultTransaction = ({ transactions }) => {
  console.log(transactions);

  const recentTransactions = transactions.slice(-8).reverse();

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Latest Transactions</h2>
      <table className="min-w-full bg-white border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 py-2 px-4">ID</th>
            <th className="border border-gray-300 py-2 px-4">User</th>
            <th className="border border-gray-300 py-2 px-4">Hotel</th>
            <th className="border border-gray-300 py-2 px-4">Room</th>
            <th className="border border-gray-300 py-2 px-4">Date</th>
            <th className="border border-gray-300 py-2 px-4">Price</th>
            <th className="border border-gray-300 py-2 px-4">Payment Method</th>
            <th className="border border-gray-300 py-2 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {recentTransactions.map((transaction) => (
            <tr key={transaction._id} className="border-t">
              <td className="border border-gray-300 py-2 px-4">
                {transaction._id}
              </td>
              <td className="border border-gray-300 py-2 px-4">
                {transaction.guestName}
              </td>
              <td className="border border-gray-300 py-2 px-4">
                {transaction.hotel.name}
              </td>
              <td className="border border-gray-300 py-2 px-4">
                {transaction.rooms.map((roomDetail, index) => (
                  <span key={index} className="block">
                    {roomDetail.roomNumberDetail.number}
                  </span>
                ))}
              </td>
              <td className="border border-gray-300 py-2 px-4">
                {new Date(transaction.dateStart).toLocaleDateString()} -{" "}
                {new Date(transaction.dateEnd).toLocaleDateString()}
              </td>
              <td className="border border-gray-300 py-2 px-4">
                {transaction.price}
              </td>
              <td className="border border-gray-300 py-2 px-4">
                {transaction.payment}
              </td>
              <td className="border border-gray-300 py-2 px-4">
                <span
                  className={`px-2 py-1 rounded ${
                    transaction.status === "Booked"
                      ? "bg-red-200 text-red-800"
                      : transaction.status === "Checkin"
                        ? "bg-green-200 text-green-800"
                        : "bg-blue-200 text-blue-800"
                  }`}
                >
                  {transaction.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DefaultTransaction;
