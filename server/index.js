import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import PatientRouter from './src/routes/PatientRoutes.js'
import UserRouter from './src/routes/UserRoutes.js'
import AppointsRouter from './src/routes/AppointsRoutes.js'
import Scheduler from './src/middleware/Scheduler.js'
const app = express()

app.use(cors())
app.use(express.json())



const PORT = process.env.PORT || 5000

const DB = process.env.MONGODB_URI || 'mongodb://localhost:27017/appointment'

const connectDBandStartServer = async () => {
    try {
        await mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        })
        console.log('MongoDB Connected')
        app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`)
        // Scheduler()
        })
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
  

}
connectDBandStartServer()


app.use('/', PatientRouter)
app.use('/', UserRouter)
app.use('/', AppointsRouter)

