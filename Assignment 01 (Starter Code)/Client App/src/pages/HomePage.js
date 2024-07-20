import React from "react";
import HomePageUI from "../components/HomePageLayou/HomePageUI";
import { useLoaderData } from "react-router-dom";
import cityService from "../services/cityService"; // Điều chỉnh đường dẫn theo cấu trúc dự án của bạn
import hotelService from "../services/hotelService";
import categoryService from "../services/categoryService";
import HomePageLayout from "../components/HomePageLayou/HomePageLayout";
import reviewService from "../services/reviewService";
import userService from "../services/userService"; // Điều chỉnh đường dẫn theo cấu trúc dự án của bạn

function HomePage() {
  const data = useLoaderData();
  console.log(data);
  return (
    <HomePageLayout
      cities={data.cities}
      hotels={data.hotels}
      categories={data.categories}
      users={data.users}
    />
  );
}

export default HomePage;

export async function homepageLoader() {
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  try {
    const [cities, hotels, categories, users] = await Promise.all([
      cityService.getAllCities(),
      hotelService.getAllHotels(),
      categoryService.getAllCategories(),
      userService.getAllUsers(),
    ]);

    const formattedHotels = hotels.map((hotel) => ({
      ...hotel,
      cheapestPrice: formatPrice(hotel.cheapestPrice),
    }));
    console.log(cities, hotels, categories, users);

    return {
      cities,
      hotels: formattedHotels,
      categories,
      users,
    };
  } catch (error) {
    console.error(
      "Có lỗi xảy ra khi lấy danh sách các thành phố và khách sạn:",
      error,
    );
    return { cities: [], hotels: [] }; // Trả về mảng rỗng nếu có lỗi
  }
}
