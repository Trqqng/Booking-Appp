const transactionService = require("../services/transactionService");

const createTransaction = async (req, res) => {
  // console.log(req.body);
  try {
    const transaction = await transactionService.createTransaction(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getTransactionById = async (req, res) => {
  try {
    const transaction = await transactionService.getTransactionById(
      req.params.id,
    );
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    res.json(transaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateTransaction = async (req, res) => {
  try {
    const transaction = await transactionService.updateTransaction(
      req.params.id,
      req.body,
    );
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    res.json(transaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteTransaction = async (req, res) => {
  try {
    const transaction = await transactionService.deleteTransaction(
      req.params.id,
    );
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    res.json({ message: "Transaction deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllTransactions = async (req, res) => {
  try {
    const transactions = await transactionService.getAllTransactions();
    res.json(transactions);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getTransactionsByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const transactions =
      await transactionService.getTransactionsByUserId(userId);
    res.json(transactions);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createTransaction,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
  getAllTransactions,
  getTransactionsByUserId,
};
