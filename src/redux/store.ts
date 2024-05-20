import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/customEventReducer'
import currentSessionReducer from './reducers/currentSessionReducer'
import listenerStatusReducer from './reducers/listenerStatusReducer'
import userReducer from './reducers/userReducer'

export default configureStore({
  reducer: {
    lastPostedEvent: counterReducer,
    currentSession: currentSessionReducer,
    listenerStatus: listenerStatusReducer,
    user: userReducer
  },
})

 // Export a reusable selector here
 export const selectSessionIDAndStatus = (state: any) => {
  return {
    sessionID: state.currentSession.sessionID,
    status: state.currentSession.status
  }
}

export const selectListenerStatus = (state: any) => {
  return {
    listeners: state.listenerStatus.listeners
  }
}

export const isUserLoggedIn = (state: any) => {
  return {
    isLoggedIn: state.user.isLoggedIn
  }
}

export const areConsentsHandled = (state: any) => {
  return state.currentSession.consentsHandled
}