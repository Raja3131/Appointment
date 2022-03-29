import Patient from "../models/PatientsModel.js";
import AppointsModel from "../models/AppointsModel.js";

export const CreatePatient = async (req, res) => {
    try {
        const existingPatient = await AppointsModel.findOne({
            name: req.body.name,
            
        })
        if (existingPatient) {
            return res.status(400).json({
                message: "Patient Already Existed",
                success: false,
            error: e
            });
            

        } else {

        const patient = await Patient.create(req.body);
        res.status(201).json({
            success: true,
            data: patient
        });
        }
    } catch (e) {
        res.status(400).json({
            success: false,
            error: e
        });
    }
};