const express = require('express');
const bodyParser = require('body-parser');
const transactionRoutes = require('./routes/transactionRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(bodyParser.json());

// Transaction Routes
app.use('/transactions', transactionRoutes);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;
