import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import DashboardPage, { dashboardPageLoader } from "./pages/DashboardPage";
import HotelPage, { hotelPageLoader } from "./pages/HotelPage";
import RoomPage, { roomPageLoader } from "./pages/RoomPage";
import LoginPage from "./pages/AuthPage";
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      {
        index: true,
        element: (
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        ),
        loader: dashboardPageLoader,
      },
      {
        path: "add-hotel",
        element: (
          <PrivateRoute>
            <HotelPage />
          </PrivateRoute>
        ),
        loader: hotelPageLoader,
      },
      {
        path: "add-room",
        element: (
          <PrivateRoute>
            <RoomPage />
          </PrivateRoute>
        ),
        loader: roomPageLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
