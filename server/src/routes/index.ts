import {Router} from 'express';

import OrphanageRoutes from './r_orphanages';

const routes = Router();

routes
  .use('/orphanages',  OrphanageRoutes)
;

export default routes;