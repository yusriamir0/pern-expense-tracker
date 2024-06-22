import pg from "pg";
import createTransaction from "../model/Transaction.js";
import createUserTable from "../model/User.js";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

// DETAILS CLIENT CONNECTION TO POSTGRESQL SERVER DATABASE
const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
});

const databaseConnect = async () => {
  try {
    const dbres = await pool.query("SELECT current_database()");
    const currentDatabase = dbres.rows[0].current_database;

    const timeRes = await pool.query("SELECT NOW()");
    const time = timeRes.rows[0].now;

    console.log(
      `Database connected successfully at database name: ${currentDatabase} at time: ${time}`
    );
    await createUserTable();
    await createTransaction();
  } catch (error) {
    console.log(error);
    console.log("Database connection failed");
  }
};

export { pool, databaseConnect };
