import nodeSchedule from 'node-schedule';
import AppointsModel from '../models/AppointsModel.js';

const Scheduler = () => {
  //run scheduler every minute
    nodeSchedule.scheduleJob('*/1 * * * *', async() => {
        try {
            const appoints = await AppointsModel.find({})
            console.log(appoints)
            
        } catch (error) {
            console.log(error)
            
        }
    })
}
export default Scheduler;