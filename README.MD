Personal Expense Tracker Backend
    This is a backend API for managing personal transactions using SQLite. It allows you to create, retrieve, update, and delete transactions. The API also provides a summary of your transactions, including total income, total expenses, and the overall balance.

Features
    Manage income and expense transactions.
    Categorize transactions.
    View transaction summary including income, expenses, and balance.
    RESTful API for CRUD operations on transactions.

Prerequisites
    Node.js installed
    SQLite3 (No separate installation needed as SQLite will be handled through the Node SQLite3 package)

Setup and Run Instructions
    1. Clone the repository:
    git clone https://github.com/aNOnYMouS123478/personal-expenses-tracker-backend-using-node.js
    2. Navigate to the project directory:
    cd personal-expense-tracker-backend
    3. Install dependencies:
    npm install
    4. Create data folder:
    mkdir data
    5. Start the server:
    node server.js
    The server will run at http://localhost:3000 by default.

API Documentation
1. Add a new transaction
    URL: /transactions
    Method: POST
    Description: Adds a new transaction to the database (either income or expense).
    Request Body:

    {
    "type": "income", // or "expense"
    "category": "Salary",
    "amount": 5000,
    "date": "2024-10-23",
    "description": "October Salary"
    }
    Response:
    {
    "message": "Transaction added successfully",
    "transaction": {
        "id": 1,
        "type": "income",
        "category": "Salary",
        "amount": 5000,
        "date": "2024-10-23",
        "description": "October Salary"
    }
    }
2. Get all transactions
    URL: /transactions
    Method: GET
    Description: Retrieves all transactions from the database.
    Response:
    [
    {
        "id": 1,
        "type": "income",
        "category": "Salary",
        "amount": 5000,
        "date": "2024-10-23",
        "description": "October Salary"
    },
    {
        "id": 2,
        "type": "expense",
        "category": "Groceries",
        "amount": 200,
        "date": "2024-10-22",
        "description": "Bought groceries"
    }
    ]
3. Get a transaction by ID
    URL: /transactions/:id
    Method: GET
    Description: Retrieves a specific transaction by ID.
    Response:
    {
    "id": 1,
    "type": "income",
    "category": "Salary",
    "amount": 5000,
    "date": "2024-10-23",
    "description": "October Salary"
    }
4. Update a transaction by ID
    URL: /transactions/:id
    Method: PUT
    Description: Updates an existing transaction by ID.
    Request Body:
    {
    "type": "expense",
    "category": "Groceries",
    "amount": 300,
    "date": "2024-10-22",
    "description": "Bought extra groceries"
    }
    Response:
    {
    "message": "Transaction updated successfully",
    "transaction": {
        "id": 1,
        "type": "expense",
        "category": "Groceries",
        "amount": 300,
        "date": "2024-10-22",
        "description": "Bought extra groceries"
    }
    }
5. Delete a transaction by ID
    URL: /transactions/:id
    Method: DELETE
    Description: Deletes a transaction by ID.
    Response:
    {
    "message": "Transaction deleted successfully"
    }
6. Get transaction summary
    URL: /summary
    Method: GET
    Description: Retrieves a summary of transactions, including total income, total expenses, and balance.
    Response:
    {
    "totalIncome": 5000,
    "totalExpenses": 200,
    "balance": 4800
    }
Folder Structure
    personal-expense-tracker-backend/
    ├── controllers/
    │   └── transactionController.js
    ├── data/
    │   └── transactions.db  (created automatically)
    ├── models/
    │   └── transactionModel.js
    ├── routes/
    │   └── transactionRoutes.js
    ├── app.js
    ├── db.js
    ├── server.js
    └── README.md

Troubleshooting
SQLite Connection Error: Ensure the data/ folder exists in the root directory.
Missing Dependencies: Run npm install to ensure all dependencies are installed.

Personal Expenses Tracker Backend Using Node.js -Api testing by postman Screenshots.
https://drive.google.com/drive/folders/1FYDgB7MFp15tDywTcYTtp0KqFND72XnD?usp=sharing





