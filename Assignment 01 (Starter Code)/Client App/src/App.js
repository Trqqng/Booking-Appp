import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { homepageLoader } from "./pages/HomePage";
import HomePage from "./pages/HomePage";
import HotelPage from "./pages/HotelPage";
import RootLayout from "./pages/RootLayout";
import SearchPage, { searchpageLoader } from "./pages/SearchPage";
import AuthPage from "./pages/AuthPage";
import TransactionPage, { transactionLoader } from "./pages/TransactionPage";
import PrivateRoute from "./components/privateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage />, loader: homepageLoader },
      { path: "search", element: <SearchPage />, loader: searchpageLoader },
      { path: "auth", element: <AuthPage /> },
      { path: "hotel/:id", element: <HotelPage /> },
      {
        path: "transaction",
        element: (
          <PrivateRoute>
            <TransactionPage />{" "}
          </PrivateRoute>
        ),
        loader: transactionLoader,
      },
    ],
  },
  // Nếu có các route không nằm trong RootLayout, định nghĩa chúng ở đây
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
