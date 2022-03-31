import React from 'react';
import { createContext, useReducer,  } from 'react';
import appointsInitialState from './initialStates/appointsInitialState';
import appointsReducer from './reducers/appointsReducer';

export const AppointsContext = createContext(appointsInitialState)


export const AppointsContextProvider = ({children}) =>{
    const [AppointsState,AppointsDispatch] =useReducer(appointsReducer,appointsInitialState)


    return(
        <AppointsContext.Provider value={{
            AppointsState,
            AppointsDispatch


        }}>
            {children}
        </AppointsContext.Provider>
    )
}