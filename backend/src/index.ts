import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()

);

app.listen(7000, () => {
    console.log("server running on localhost:7000");
  });
  