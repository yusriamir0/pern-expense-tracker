import { pool } from "../config/connection.js";

const query = `

CREATE TYPE account_type AS ENUM(
  'Savings',
  'Invesment',
  'Checking',
  'Credit card',
  'Building',
  'School',
  'Project',
  'Utilities',
  'Travel',
  'Personal',
  'Loan',
  'Organization',
  'Grocery',
  'Food',
  'Entertainment',
  'Other'
);

CREATE TABLE IF NOT EXISTS accounts (
  name VARCHAR(255) UNIQUE NOT NULL,
  account_type account_type NOT NULL,
  initial_balance NUMERIC(7,2) DEFAULT 0,
  id serial PRIMARY KEY, -- will be pushed to Transactions model
  user_id INTEGER REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;

const createAccountTable = async () => {
  try {
    await pool.query(query);
    console.log("User account created");
  } catch (error) {}
};

export default createAccountTable;
