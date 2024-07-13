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
  id SERIAL PRIMARY KEY,   
  account_id UUID REFERENCES accounts(account_id),
  amount NUMERIC NOT NULL,
  transaction_type transaction_type NOT NULL,
  description TEXT,
  category category NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP DEFAULT NOW()
)
`;

const createTransactionTable = async () => {
  try {
    await pool.query(query);
    console.log("Transaction successfully created");
  } catch (error) {}
};

export default createTransactionTable;

// * ALTERNATIVE
// CREATE TABLE transactions (
//   id SERIAL PRIMARY KEY,
//   account_id UUID,
//   amount NUMERIC,
//   transaction_type VARCHAR(50),
//   date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   description TEXT,
//   FOREIGN KEY (account_id) REFERENCES accounts(account_id)
// );
