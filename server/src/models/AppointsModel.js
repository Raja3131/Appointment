import mongoose from 'mongoose'

const appointments = new mongoose.Schema({
    name: {
        type: String,


    }

})
const AppointsModel = mongoose.model('appointments', appointments)
export default AppointsModel;