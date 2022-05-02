import axios from 'axios';

export const getAllDoctors = async (req,res) => {
    try{
        const response = await axios.get('http://testingapi.wynkemr.com/DoctorMaster/Getalldoctorssearch/1062');
        res.status(200).json(response.data);
    }
    catch(error){
        res.status(500).send(error);
    }
}