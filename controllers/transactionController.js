const db = require('../models/db');

// Add a new transaction
exports.addTransaction = (req, res) => {
  const { type, category, amount, date, description } = req.body;
  const sql = `INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)`;

  db.run(sql, [type, category, amount, date, description], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Failed to add transaction' });
    }
    res.status(201).json({ id: this.lastID, message: 'Transaction added' });
  });
};

// Get all transactions
exports.getAllTransactions = (req, res) => {
  const sql = `SELECT * FROM transactions`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve transactions' });
    }
    res.status(200).json({ transactions: rows });
  });
};

// Get transaction by ID
exports.getTransactionById = (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM transactions WHERE id = ?`;

  db.get(sql, [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve transaction' });
    }
    if (!row) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.status(200).json(row);
  });
};

// Update a transaction
exports.updateTransaction = (req, res) => {
  const { id } = req.params;
  const { type, category, amount, date, description } = req.body;
  const sql = `UPDATE transactions SET type = ?, category = ?, amount = ?, date = ?, description = ? WHERE id = ?`;

  db.run(sql, [type, category, amount, date, description, id], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Failed to update transaction' });
    }
    res.status(200).json({ message: 'Transaction updated' });
  });
};

// Delete a transaction
exports.deleteTransaction = (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM transactions WHERE id = ?`;

  db.run(sql, [id], function(err) {
    if (err) {
      return res.status(500).json({ error: 'Failed to delete transaction' });
    }
    res.status(200).json({ message: 'Transaction deleted' });
  });
};
