import {Router} from 'express';

import multer from 'multer';
import uploadConfig from '../config/upload';
const upload = multer(uploadConfig);

import OrphanageController from '../controllers/c_orphanages';

const OrphanagesRouters = Router();

OrphanagesRouters
  .post('/create-orphanages', upload.array('images'), OrphanageController.create)
  .get('/list-orphanages', OrphanageController.index)
  .get('/list-orphanages/:id', OrphanageController.show)
;

export default OrphanagesRouters;