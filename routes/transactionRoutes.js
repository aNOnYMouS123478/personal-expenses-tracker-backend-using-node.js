const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Add a new transaction
router.post('/', transactionController.addTransaction);

// Get all transactions
router.get('/', transactionController.getAllTransactions);

// Get a transaction by ID
router.get('/:id', transactionController.getTransactionById);

// Update a transaction
router.put('/:id', transactionController.updateTransaction);

// Delete a transaction
router.delete('/:id', transactionController.deleteTransaction);

module.exports = router;
