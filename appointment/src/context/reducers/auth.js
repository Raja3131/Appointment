import { ACTION_TYPES } from "../../constants/actionTypes";

const auth = (state,{type,payload}) =>{
    switch(type){
       case ACTION_TYPES.LOGIN_LOADING:
        case ACTION_TYPES.REGISTER_LOADING: 
        return{
            ...state,
            loading: true,
        }
        case ACTION_TYPES.REGISTER_SUCCESS:
            return {
              ...state,
              loading: false,
              data: payload,
            };
      
          case ACTION_TYPES.LOGIN_SUCCESS:
            return {
              ...state,
              loading: false,
              data: payload,
              isLoggedIn: true,
            };
      
          case ACTION_TYPES.LOGOUT_USER:
            return {
              ...state,
              loading: false,
              data: null,
              isLoggedIn: false,
            };
      
          case ACTION_TYPES.REGISTER_FAIL:
          case ACTION_TYPES.LOGIN_FAIL:
            return {
              ...state,
              loading: false,
              error: payload,
            };
      
          case ACTION_TYPES.CLEAR_AUTH_STATE:
            return {
              ...state,
              loading: false,
              data: null,
              error: null,
            };
      
          default:
            return state;
        }
      };
      
      export default auth;
