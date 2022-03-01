import mongoose from 'mongoose'

const doctorSchema = mongoose.Schema({
    name:{
        type: String,
    },
    specialist:{
        type: String,
    },
    image:{
        type: String,
    }
})

const Doctor = mongoose.model('Doctor', doctorSchema)
export default Doctor
    