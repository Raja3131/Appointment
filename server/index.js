import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import DoctorRouter from './src/routes/DoctorRoutes.js'
import PatientRouter from './src/routes/PatientRoutes.js'
import UserRouter from './src/routes/UserRoutes.js'
const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000

const DB = process.env.MONGODB_URI || 'mongodb://localhost:27017/appointment'

mongoose.connect(DB, { useNewUrlParser: true }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}).catch(err => {
    console.log(err)
})

app.use('/', DoctorRouter)
app.use('/', PatientRouter)
app.use('/', UserRouter)
