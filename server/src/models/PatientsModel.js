import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName:{
    type: String,

  },
  age: {
    type: Number,
  },
  mobile: {
    type: String,
  },
  doctorID: {
    type: String,
  },

 
})

const Patient = mongoose.model('Patient', patientSchema)
export default Patient