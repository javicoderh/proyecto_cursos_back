import Router from "./routes/routes.js";
import express from "express";
import db from "./config/dataBase.js";
import cors from "cors"
import * as dotenv from "dotenv";

const app = express();
app.use(express.json())

app.use(cors());

try {
  await db.authenticate();
  console.log('Connection has been established successfully.');
} catch (err) {
  console.error('Unable to connect to the database:');
}


app.use(Router);
app.listen(process.env.PORT, () => {
console.log('welcome to cursimple, it is the magic oF WORKSHOPS')
})
