import React from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import TransactionList from "./TransactionList";
import InfoBoard from "./InfoBoard";
import HotelList from "./HotelList";
import UserList from "./UserList";
import RoomList from "./RoomList";
import DefaultTransaction from "./DefaultTransaction";

const DashboardPage = () => {
  const { transactions, users, hotels, rooms } = useLoaderData();
  const { selectedComponent } = useOutletContext();

  const renderComponent = () => {
    switch (selectedComponent) {
      case "TransactionList":
        return <TransactionList transactions={transactions} />;
      case "HotelList":
        return <HotelList hotels={hotels} />;
      case "UserList":
        return <UserList users={users} />;
      case "RoomList":
        return <RoomList rooms={rooms} />;
      default:
        return <DefaultTransaction transactions={transactions} />;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <InfoBoard transactions={transactions} users={users} />
      {renderComponent()}
    </div>
  );
};

export default DashboardPage;
