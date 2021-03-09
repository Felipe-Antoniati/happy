import express, { Request, Response } from "express";
import "./database/connection";

const app = express();

app
  .use(express.json())
  .get("/", (req: Request, res: Response) => {
    res.json({
      message: "Hello World"
    })
  });

app.listen(5000);