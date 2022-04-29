
const appointsReducer = (state, {type, payload}) => {
    switch (type) {
    case 'GET_CONTACTS_LOADING':
        return {
          ...state,
          getAppoints: {
            ...state.getAppoints,
            loading: true,
            error: null,
          },
        };
  
      case 'GET_CONTACTS_SUCCESS':
        return {
          ...state,
          getAppoints: {
            ...state.getAppoints,
            loading: false,
            data: payload,
            error: null,
          },
        };
  
      case 'GET_CONTACTS_FAIL':
        return {
          ...state,
          getAppoints: {
            ...state.getAppoints,
            loading: false,
            error: payload,
          },
        };
  
      default:
        return state;
    }
};

export default appointsReducer;