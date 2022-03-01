import express from 'express'
import {getDoctors,createDoctors,getDoctor,updateDoctors,deleteDoctors} from '../controllers/DoctorController.js';

const DoctorRouter = express.Router();
DoctorRouter.get('/',getDoctors);
DoctorRouter.post('/',createDoctors);
DoctorRouter.get('/:id',getDoctor);
DoctorRouter.patch('/:id',updateDoctors);
DoctorRouter.delete('/:id',deleteDoctors);

export default DoctorRouter;
// Compare this snippet from appointment\src\screens\DoctorsScreen.js:


