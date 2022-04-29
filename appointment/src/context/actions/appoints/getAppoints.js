import Api from "../../../api/Api";

export default () => (dispatch) => {
    dispatch({ type: "GET_APPOINTS_START" });
    Api.get('/appoints')
        .then((response) => {
        dispatch({ type: "GET_APPOINTS_SUCCESS", payload: response.data });
        })
        .catch((error) => {
        dispatch({ type: "GET_APPOINTS_FAILURE", payload: error });
        });
    }