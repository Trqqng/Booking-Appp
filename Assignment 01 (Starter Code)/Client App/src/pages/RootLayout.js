// RootLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import rootLayoutStyles from "./RootLayout.module.css"; // Import styles từ CSS Module
import footerStyles from "../components/Layout/Footer.module.css"; // Import styles từ CSS Module của Footer

const RootLayout = () => {
  return (
    <div className={rootLayoutStyles.rootContainer}>
      <main className={rootLayoutStyles.content}>
        <Outlet /> {/* Nơi các component của route sẽ được hiển thị */}
      </main>
      <Footer className={footerStyles.footer} />
    </div>
  );
};

export default RootLayout;
