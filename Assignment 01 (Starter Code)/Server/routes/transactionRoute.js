const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactionController");

router.post("/", transactionController.createTransaction);
router.get("/:id", transactionController.getTransactionById);
router.put("/:id", transactionController.updateTransaction);
router.delete("/:id", transactionController.deleteTransaction);
router.get("/", transactionController.getAllTransactions);

// Thêm route mới để lấy giao dịch theo userId
router.get("/user/:userId", transactionController.getTransactionsByUserId);

module.exports = router;
