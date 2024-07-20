import { getAllTransactions } from "../services/transactionService";
import { useLoaderData } from "react-router-dom";
import DashboardPageUI from "../components/DashboardLayout/DashboardPageUI";
import store from "../store";
import {
  getAllTransactionsThunk,
  getTransactionsByUserIdThunk,
} from "../features/transaction/transactionThunk";
import { getAllUsersThunk } from "../features/user/userThunk";
import { fetchHotels } from "../features/hotel/hotelThunk";
import { fetchAllRooms } from "../features/room/roomThunk";

const DashboardPage = () => {
  const data = useLoaderData();

  return (
    <>
      <DashboardPageUI
        transactions={data.transactions}
        users={data.users}
        hotels={data.hotels}
        rooms={data.rooms}
      />
    </>
  );
};

export default DashboardPage;

export async function dashboardPageLoader() {
  try {
    console.log("hi");

    // Gọi các thunks song song bằng Promise.all
    const [
      resultActionTransactions,
      resultActionUsers,
      resultActionHotels,
      resultActionRooms,
    ] = await Promise.all([
      store.dispatch(getAllTransactionsThunk()),
      store.dispatch(getAllUsersThunk()),
      store.dispatch(fetchHotels()),
      store.dispatch(fetchAllRooms()),
    ]);

    if (
      getAllTransactionsThunk.fulfilled.match(resultActionTransactions) &&
      getAllUsersThunk.fulfilled.match(resultActionUsers) &&
      fetchHotels.fulfilled.match(resultActionHotels) &&
      fetchAllRooms.fulfilled.match(resultActionRooms)
    ) {
      return {
        transactions: resultActionTransactions.payload,
        users: resultActionUsers.payload,
        hotels: resultActionHotels.payload,
        rooms: resultActionRooms.payload,
      };
    } else {
      throw new Error("Failed to load transactions or users");
    }
  } catch (error) {
    console.error("Error fetching data", error);
    return { error: "Failed to load data" };
  }
}
