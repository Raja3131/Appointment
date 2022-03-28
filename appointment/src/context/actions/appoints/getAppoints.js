import { GET_APPOINTS } from "../../../constants/actionTypes";
import API from "../../../api";


export default () => (dispatch) => {
    API.get("/appoints")
        .then((response) => {
            dispatch({
                type: GET_APPOINTS,
                payload: response.data

            })
        })
        .catch((error) => {
            console.log(error);
        })
}