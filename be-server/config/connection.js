import pg from "pg";
import dotenv from "dotenv";
import createUserTable from "../model/User.js";
import createAccountTable from "../model/Account.js";
import createTransactionTable from "../model/Transaction.js";

dotenv.config();

const { Pool } = pg;

// DETAILS CLIENT CONNECTION TO POSTGRESQL SERVER DATABASE
const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
});

const databaseConnect = async (next) => {
  try {
    const dbres = await pool.query("SELECT current_database()");
    const currentDatabase = dbres.rows[0].current_database;

    const timeRes = await pool.query("SELECT NOW()");
    const time = timeRes.rows[0].now;

    console.log(
      `Database connected successfully at database name: ${currentDatabase} at time: ${time}`
    );
    await createUserTable();
    await createAccountTable();
    await createTransactionTable();
  } catch (error) {
    console.log(error);
    console.log("Database connection failed");
  }
};

export { pool, databaseConnect };
