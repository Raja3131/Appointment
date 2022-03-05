import express from 'express'
import { CreatePatient } from './../controllers/PatientController.js';


const PatientRouter = express.Router();

PatientRouter.post('/patient', CreatePatient);

export default PatientRouter;

