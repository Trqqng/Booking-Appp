import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  HomeIcon,
  UserIcon,
  OfficeBuildingIcon,
  ClipboardListIcon,
  PlusCircleIcon,
  LogoutIcon,
  KeyIcon,
} from "@heroicons/react/outline";
import { logoutThunk } from "../../features/auth/authThunks";

const Sidebar = ({ setSelectedComponent }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigation = (path, component) => {
    setSelectedComponent(component);
    navigate(path);
  };

  const handleLogout = () => {
    dispatch(logoutThunk()).then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="w-64 h-screen bg-white shadow-md">
      <div className="p-4 text-center text-purple-600 font-bold text-lg">
        Admin Page
      </div>
      <nav className="px-4 py-2">
        <div className="text-gray-600 uppercase font-semibold text-xs">
          Main
        </div>
        <ul className="space-y-2">
          <li
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
            onClick={() => handleNavigation("/", "DefaultTransaction")}
          >
            <HomeIcon className="h-5 w-5 text-purple-600" />
            <span>Dashboard</span>
          </li>
        </ul>
        <div className="text-gray-600 uppercase font-semibold text-xs mt-4">
          Lists
        </div>
        <ul className="space-y-2">
          <li
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
            onClick={() => handleNavigation("/", "UserList")}
          >
            <UserIcon className="h-5 w-5 text-purple-600" />
            <span>Users</span>
          </li>
          <li
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
            onClick={() => handleNavigation("/", "HotelList")}
          >
            <OfficeBuildingIcon className="h-5 w-5 text-purple-600" />
            <span>Hotels</span>
          </li>
          <li
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
            onClick={() => handleNavigation("/", "RoomList")}
          >
            <KeyIcon className="h-5 w-5 text-purple-600" />
            <span>Rooms</span>
          </li>
          <li
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
            onClick={() => handleNavigation("/", "TransactionList")}
          >
            <ClipboardListIcon className="h-5 w-5 text-purple-600" />
            <span>Transactions</span>
          </li>
        </ul>
        <div className="text-gray-600 uppercase font-semibold text-xs mt-4">
          New
        </div>
        <ul className="space-y-2">
          <li
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
            onClick={() => handleNavigation("/add-hotel", "NewHotel")}
          >
            <PlusCircleIcon className="h-5 w-5 text-purple-600" />
            <span>New Hotel</span>
          </li>
          <li
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
            onClick={() => handleNavigation("/add-room", "NewRoom")}
          >
            <PlusCircleIcon className="h-5 w-5 text-purple-600" />
            <span>New Room</span>
          </li>
        </ul>
        <div className="text-gray-600 uppercase font-semibold text-xs mt-4">
          User
        </div>
        <ul className="space-y-2">
          <li
            className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
            onClick={handleLogout}
          >
            <LogoutIcon className="h-5 w-5 text-purple-600" />
            <span>Logout</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
