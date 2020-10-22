import { Router } from "express";

import HomeSocietyRouters from "./r_home_societies";

const routes = Router();

routes.use("/home-societies", HomeSocietyRouters);

export default routes;
