import Patient from "../models/PatientsModel.js";

export const CreatePatient = async (req, res) => {
    try {
        const patient = await Patient.create(req.body);
        res.status(201).json({
            success: true,
            data: patient
        });
    } catch (e) {
        res.status(400).json({
            success: false,
            error: e
        });
    }
};