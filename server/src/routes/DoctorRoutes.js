import express from 'express';
import { getAllDoctors } from '../controllers/DoctorsController.js';
const DoctorRoutes = express.Router();


DoctorRoutes.get('/doctors', getAllDoctors);

export default DoctorRoutes;