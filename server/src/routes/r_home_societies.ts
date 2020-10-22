import { Router } from "express";

import multer from "multer";
import uploadConfig from "../config/upload";
const upload = multer(uploadConfig);

import HomeSocietyController from "../controllers/c_home_societies";

const HomeSocietyRouters = Router();

HomeSocietyRouters
  .post(
    "/create-home-society",
    upload.array("images"),
    HomeSocietyController.create
  )
  .get("/list-home-societies", HomeSocietyController.index)
  .get("/list-home-societies/:id", HomeSocietyController.show);

export default HomeSocietyRouters;
