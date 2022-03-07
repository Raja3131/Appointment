import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  // mobile: {
  //   type: String,
  // },
  // address: {
  //   type: String,
  // },
 
 
})

const Patient = mongoose.model('Patient', patientSchema)
export default Patient