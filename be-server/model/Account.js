import { pool } from "../config/connection.js";

const query = `
C
`;

const createAccountTable = async () => {
  try {
    await pool.query(query);
    console.log("User table created");
  } catch (error) {
    console.log(error);
  }
};

export default createAccountTable;
