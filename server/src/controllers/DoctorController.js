import Doctor from './../models/DoctorsModel.js';

export const getDoctors = async (req,res) =>{
    try{
        const doctors = await Doctor.find();
        res.status(200).json({
            status: 'success',
            results: doctors.length,
            data: {
                doctors
            }
        })
    }
    catch(error){
        res.status(500).send(error);
    }
}

export const createDoctors = async (req,res) =>{
    const body = req.body;

    try{
        const newDoctor = new Doctor(body);
        const doctor = await newDoctor.save();
        
        res.status(201).json({
            status: 'success',
            data: {
                newDoctor,

            }
        })
    }
    catch(error){
        res.status(500).send(error);
    }
}

export const updateDoctors = async(req,res)=>{
    const _id = req.params.id;
    try{
        const updateDoctor = await Doctor.findByIdAndUpdate(_id, req.body, {
            new: true,
            runValidators: true
            
        });
        if(!updateDoctor){
            return res.status(404).send({
                status: 'fail',
                message: 'Doctor not found'
            })
        }
        res.status(200).json({
            status: 'success',
            data: {
                updateDoctor
            }
        })
    }
    catch(error){
        res.status(500).send(error);
    }
}

export const deleteDoctors = async (req,res) =>{
    const _id = req.params.id;
    try{
        const deleteDoctor = await Doctor.findByIdAndDelete(_id);
        if(!deleteDoctor){
            return res.status(404).send({
                status: 'fail',
                message: 'Doctor not found'
            })
        }
        res.status(200).json({
            status: 'success',
            data: {
                deleteDoctor
            }
        })
    }
    catch(error){
        res.status(500).send(error);
    }
}

export const getDoctor = async (req,res) =>{
    const _id = req.params.id;
    try{
        const doctor = await Doctor.findById(_id);
        if(!doctor){
            return res.status(404).send({
                status: 'fail',
                message: 'Doctor not found'
            })
        }
        res.status(200).json({
            status: 'success',
            data: {
                doctor
            }
        })
    }
    catch(error){
        res.status(500).send(error);
    }
}
