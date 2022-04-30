import nodeSchedule from "node-schedule";
import AppointsModel from "../models/AppointsModel.js";

const Scheduler = () => {
  const currentDate = new Date();
  const currentTime =
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
    //run node schedule every hour
  nodeSchedule.scheduleJob("0,30 * * * *", async () => {
    try {
      const appoints = await AppointsModel.find({});
      if (appoints.length > 0) {
        appoints.forEach(async (appoint) => {
          const date = new Date(appoint.date);
          const time = new Date(appoint.time);
          const appointDate =
            date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
          const appointTime =
            time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
          if (
            appointDate < currentDate.getDate() &&
            appointTime < currentTime
          ) {
            {
              await AppointsModel.findByIdAndDelete(appoint._id);
            }
          }
          await AppointsModel.findByIdAndDelete(appoint._id);
          console.log("Appointment date expired");
        });
      }

      console.log(appoints);
    } catch (error) {
      console.log(error);
    }
  });
};
export default Scheduler;
