import express from 'express'
import { CreateAppoint,GetAppoints,DeleteAppoint} from './../controllers/AppointsController.js';

const AppointsRouter = express.Router();

AppointsRouter.post('/appoints',CreateAppoint);
AppointsRouter.get('/appoints',GetAppoints);
AppointsRouter.delete('/appoints/:id',DeleteAppoint);

export default AppointsRouter;