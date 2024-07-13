import { pool } from "../config/connection.js";

const query = `
CREATE TYPE account_type AS ENUM(
  'Savings',
  'Investment',
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

CREATE TABLE IF NOT EXISTS accounts(
  id serial PRIMARY KEY,
  account_id UUID DEFAULT gen_random_uuid() UNIQUE,
  name VARCHAR(255) NOT NULL,
  account_type account_type NOT NULL,
  initial_balance NUMERIC(7,2) DEFAULT 0,
  notes TEXT,
  created_by INTEGER REFERENCES users(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;

const createAccountTable = async () => {
  try {
    await pool.query(query);
    console.log("Account created");
  } catch (error) {}
};

export default createAccountTable;

// * ALTERNATIVE
// CREATE TABLE accounts (
//   id SERIAL PRIMARY KEY,
//   account_id UUID DEFAULT gen_random_uuid(),
//   name VARCHAR(255),
//   account_type VARCHAR(50),
//   initial_balance NUMERIC,
//   notes TEXT,
//   created_by INT
// );
