import AppointsModel from './../models/AppointsModel.js';

export const CreateAppoint = async (req, res) => {
    try {
       //create a new appointment for react native app
        const newAppoint = new AppointsModel({
            name: req.body.name,
            doctor: req.body.doctor,
            date: req.body.date,
            time: req.body.time,
        });
        await newAppoint.save();
       
    } catch (e) {
        res.status(400).json({
            success: false,
            error: e
        });
    }
}
export const GetAppoints = async (req, res) => {
    try{
        const appoints = await AppointsModel.find();
        res.status(200).json({
             appoints

        })
        const patient = appoints.map(appoint => appoint.PatientName);
        console.log(patient);
    }
    catch(error){
        res.status(500).send(error);
    }
}

export const DeleteAppoint = async (req, res) => {
    try {
        const appoint = await AppointsModel.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: 'Appointment deleted successfully' });
    } catch (e) {
        res.status(400).json({
            success: false,
            error: e
        });
    }
}

export const UpdateAppoint = async (req, res) => {
    try {
        const appoint = await AppointsModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send({ message: 'Appointment updated successfully' });
    } catch (e) {
        res.status(400).json({
            success: false,
            error: e
        });
    }
}
