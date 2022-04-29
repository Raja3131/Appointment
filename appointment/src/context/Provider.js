import React from 'react';
import {createContext, useReducer} from 'react';
import appointsInitialState from './initialStates/appointsInitialState';
import appointsReducer from './reducers/appointsReducer';

export const AppointsContext = createContext(appointsReducer,appointsInitialState);

export const AppointsContextProvider = ({children}) => {
  const [AppointsState, AppointsDispatch] = useReducer(
    appointsInitialState,
    appointsReducer,

  );

  return (
    <AppointsContext.Provider
      value={{
        AppointsState,
        AppointsDispatch,


      }}>
      {children}
    </AppointsContext.Provider>
  );
};
