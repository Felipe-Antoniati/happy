import express from "express";
import cors from "cors";
import helmet from "helmet";
import http from "http";
import path from "path";
import routes from "./routes";

import "./database/connection";

import "express-async-errors";
import errorHandler from "./errors/handler";

const PORT = process.env.PORT || 5000;
const app = express();

app
  .use(cors())
  .use(helmet())
  .use(express.json())
  .use("/", routes)
;

app.use("/uploads", express.static(
    path.join(__dirname, "..", "uploads")
  ))
;

app.use(errorHandler);

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(
    `Server Started: http://localhost:${PORT}`
  );
});
