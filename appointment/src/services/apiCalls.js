import Api from "../api/Api"
export const getAppointsCall = async(state,dispatch) =>{
    dispatch({type: "GET_APPOINTS_START"})
    try{
        const response = await Api.get("/appoints")
        dispatch({type: "GET_APPOINTS_SUCCESS", payload: response.data})
    }catch(error){
        dispatch({type: "GET_APPOINTS_ERROR", payload: error})
    }
}