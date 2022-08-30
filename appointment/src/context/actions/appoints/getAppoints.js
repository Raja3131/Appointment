export const getAppointsStart = (stateStart) =>({
    type: "GET_APPOINTS_START",
    payload: stateStart
    
})
export const getAppointsSuccess = (AppointsState) =>({
    type: "GET_APPOINTS_SUCCESS",
    payload: AppointsState
})
export const getAppointsError = (error) =>({
    type: "GET_APPOINTS_ERROR",
    payload: error
})


