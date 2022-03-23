import express from 'express'
import { CreateAppoint,GetAppoints,DeleteAppoint,UpdateAppoint} from './../controllers/AppointsController.js';

const AppointsRouter = express.Router();

AppointsRouter.post('/appoints',CreateAppoint);
AppointsRouter.get('/appoints',GetAppoints);
AppointsRouter.delete('/appoints/:id',DeleteAppoint);
AppointsRouter.put('/appoints/:id',UpdateAppoint);

export default AppointsRouter;