import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
  connected: false,
}

export const ConnectionContext = createContext(initialState)

export const ConnectionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  function setUpConnection() {
    dispatch({
      type: 'connect',
    })
  }

  function disconnect() {
    dispatch({
      type: 'disconnect',
    })
  }

  return (
    <ConnectionContext.Provider
      value={{
        connected: state.connected,
        setUpConnection,
        disconnect,
      }}
    >
      {children}
    </ConnectionContext.Provider>
  )
}
