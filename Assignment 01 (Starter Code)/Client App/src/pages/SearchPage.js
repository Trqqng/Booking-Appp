import { useLoaderData, useNavigate } from "react-router-dom";
import SearchPageUI from "../components/SearchPageLayout/SearchPageUI";
import hotelService from "../services/hotelService";
import cityService from "../services/cityService";
import categoryService from "../services/categoryService";

const SearchPage = () => {
  const data = useLoaderData();
  console.log("searchPage", data);

  return (
    <SearchPageUI
      hotels={data.hotels}
      categories={data.categories}
      cities={data.cities}
    />
  );
};

export default SearchPage;

export async function searchpageLoader() {
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  try {
    const [hotels, cities, categories] = await Promise.all([
      hotelService.getAllHotels(),
      cityService.getAllCities(),
      categoryService.getAllCategories(),
    ]);

    const formattedHotels = hotels.map((hotel) => ({
      ...hotel,
      cheapestPrice: formatPrice(hotel.cheapestPrice),
    }));

    return {
      cities,
      hotels: formattedHotels,
      categories,
    };
  } catch (error) {
    console.error(
      "Có lỗi xảy ra khi lấy danh sách các thành phố và khách sạn:",
      error,
    );
    return { hotels: [], cities: [], categories: [] };
  }
}
