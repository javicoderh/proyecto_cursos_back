import  { Sequelize } from "sequelize";
import * as dotenv from "dotenv"
dotenv.config();

const db = new Sequelize (
process.env.DATABASE_URL,
process.env.PGDATABASE,
process.env.PGHOST,
process.env.PGPASSWORD, {
  host: process.env.PGPORT,
  dialect: 'postgres',
  logging: false,
  port: process.env.PGUSER,
  define: {
    timestamps: false,
    },
});


export default db;
