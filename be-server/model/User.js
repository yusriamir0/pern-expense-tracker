import { pool } from "../config/connection.js";

const query = `
CREATE TABLE IF NOT EXISTS users (
  full_name VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  has_created_account BOOLEAN DEFAULT FALSE, 
  id serial PRIMARY KEY, -- will be pushed to Account model
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;

const createUserTable = async () => {
  try {
    await pool.query(query);
  } catch (error) {
    console.log(error);
  }
};

export default createUserTable;
