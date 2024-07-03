import { pool } from "../config/connection.js";

const query = `
CREATE TYPE transaction_type AS ENUM(
  'expense',
  'income'
);

CREATE TYPE category AS ENUM(
'Food',
'Transportation',
'Entertainment',
'Shopping',
'Utilities',
'Healthcare',
'Travel',
'Education',
'Personal',
'Groceries',
'Bills',
'Uncategorized'
);

CREATE TABLE IF NOT EXISTS transactions(
  name VARCHAR(255) NOT NULL,
  transaction_type transaction_type NOT NULL,
  category category NOT NULL,
  amount INT NOT NULL,
  user_id INTEGER REFERENCES users(id),
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP DEFAULT NOW(),
  id SERIAL PRIMARY KEY
)
`;

const createTransactionTable = async () => {
  try {
    await pool.query(query);
    console.log("Transaction created");
  } catch (error) {}
};

export default createTransactionTable;
