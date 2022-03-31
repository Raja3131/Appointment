
const appointsReducer = (state, action) => {
    switch (action.type) {
        case "GET_APPOINTS_START":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "GET_APPOINTS_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case "GET_APPOINTS_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case "DELETE_APPOINT_START":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "DELETE_APPOINT_SUCCESS":
            return {
                ...state,
                loading: false,
                data: state.data.filter(appointment => appointment._id !== action.payload)
            };
        case "DELETE_APPOINT_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}
export default appointsReducer;