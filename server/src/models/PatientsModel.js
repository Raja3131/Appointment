import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  mobile: {
    type: String,
  },

 
})

const Patient = mongoose.model('Patient', patientSchema)
export default Patient