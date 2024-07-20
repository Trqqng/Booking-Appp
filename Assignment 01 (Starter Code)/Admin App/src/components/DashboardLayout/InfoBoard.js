import {
  CreditCardIcon,
  CurrencyDollarIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { useEffect, useState } from "react";

const InfoBoard = ({ transactions, users }) => {
  const [totalEarning, setTotalEarning] = useState("");

  useEffect(() => {
    setTotalEarning(
      transactions.reduce((sum, transaction) => sum + transaction.price, 0),
    );
  }, [transactions]);
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="bg-white shadow rounded-lg p-4 flex items-center justify-between">
        <div>
          <h3 className="text-gray-600">Users</h3>
          <p className="text-2xl">{users.length}</p>
        </div>
        <UserIcon className="h-8 w-8 text-red-400" />
      </div>
      <div className="bg-white shadow rounded-lg p-4 flex items-center justify-between">
        <div>
          <h3 className="text-gray-600">Orders</h3>
          <p className="text-2xl">{transactions.length}</p>
        </div>
        <ShoppingCartIcon className="h-8 w-8 text-yellow-400" />
      </div>
      <div className="bg-white shadow rounded-lg p-4 flex items-center justify-between">
        <div>
          <h3 className="text-gray-600">Earnings</h3>
          <p className="text-2xl">{totalEarning}</p>
        </div>
        <CurrencyDollarIcon className="h-8 w-8 text-green-400" />
      </div>
      <div className="bg-white shadow rounded-lg p-4 flex items-center justify-between">
        <div>
          <h3 className="text-gray-600">Balance</h3>
          <p className="text-2xl">$100</p>
        </div>
        <CreditCardIcon className="h-8 w-8 text-purple-400" />
      </div>
    </div>
  );
};

export default InfoBoard;
