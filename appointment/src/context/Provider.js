import React , { createContext, useReducer } from 'react';

const GlobalStateContext = createContext();

const GlobalProvider = ({ children }) => {
    return <GlobalStateContext.Provider value={useReducer(reducer, initialState)}>{children}
    
    </GlobalStateContext.Provider>;
    
}