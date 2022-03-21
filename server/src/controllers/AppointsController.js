import AppointsModel from './../models/AppointsModel.js';

export const CreateAppoint = async (req, res) => {
    try {
        const appoint = new AppointsModel({
            name: req.body.name,
        })
        await appoint.save();
        res.status(200).send({ message: 'Appointment created successfully' });
            
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
