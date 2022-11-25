import mssql from "mssql";
import * as dotenv from "dotenv";
dotenv.config()

const dbConfig = {
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  server: process.env.SERVER,
  user: process.env.USER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
}

export const poolPromise = mssql.connect(dbConfig).then(pool => {
  if (pool.connected) {
    console.info(`connected to db`)
    return pool
  }
});

export default poolPromise

