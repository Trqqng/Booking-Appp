import React, { useState } from "react";
import Sidebar from "../components/Layout/Sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const [selectedComponent, setSelectedComponent] = useState("Dashboard");

  return (
    <div className="flex">
      <Sidebar setSelectedComponent={setSelectedComponent} />
      <main className="flex-1">
        <Outlet context={{ selectedComponent }} />
      </main>
    </div>
  );
};

export default RootLayout;
