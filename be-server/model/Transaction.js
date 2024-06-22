import { pool } from "../config/connection.js";

const query = `
CREATE TABLE IF NOT EXISTS transactions(
    id SERIAL PRIMARY KEY,
    text VARCHAR(255) NOT NULL,
    status BOOLEAN DEFAULT FALSE,
    amount INT NOT NULL,
    user_id INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW() 
)
`;

const createTransaction = async () => {
  try {
    await pool.query(query);
    console.log("Transaction created");
  } catch (error) {
    console.error(error);
  }
};

export default createTransaction;
