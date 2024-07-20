import TransactionUI from "../components/TransactionLayout/TransactionUI";
import store from "../store";
import { useSelector } from "react-redux";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getTransactionsByUserIdThunk } from "../features/transaction/transactionThunk";

const TransactionPage = () => {
  const transactions = useLoaderData();
  return (
    <div>
      <TransactionUI transactions={transactions} />
    </div>
  );
};

export default TransactionPage;

export async function transactionLoader() {
  const state = store.getState();
  const user = state.auth.user;

  if (!user) {
    alert("Please login before view this route");
  }

  try {
    const resultAction = await store.dispatch(
      getTransactionsByUserIdThunk(user.userId),
    );
    if (getTransactionsByUserIdThunk.fulfilled.match(resultAction)) {
      return resultAction.payload;
    } else {
      throw new Error(resultAction.error.message);
    }
  } catch (error) {
    console.error("Error fetching transactions", error);
    return { error: "Failed to load transactions" };
  }
}
