import mongoose from 'mongoose'

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  phone: {
    type: String,
  },
  avatar: String,
  tokens: [{ type: Object }],
})

const Patient = mongoose.model('Patient', patientSchema)
export default Patient