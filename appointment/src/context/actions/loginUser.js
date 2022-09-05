
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ACTION_TYPES } from '../../constants/actionTypes';

export default ({password, userName: username}) => (dispatch) => {
    dispatch({
      type: ACTION_TYPES.LOGIN_LOADING,
    });
    axiosInstance
      .post('auth/login', {
        password,
        username,
      })
      .then((res) => {
        AsyncStorage.setItem('token', res.data.token);
        AsyncStorage.setItem('user', JSON.stringify(res.data.user));
        dispatch({
          type: ACTION_TYPES.LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: ACTION_TYPES.LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong, try agin'},
        });
      });
  };



















  