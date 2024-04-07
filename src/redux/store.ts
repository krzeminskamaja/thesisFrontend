import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/customEventReducer'
import currentSessionReducer from './reducers/currentSessionReducer'
import listenerStatusReducer from './reducers/listenerStatusReducer'

export default configureStore({
  reducer: {
    lastPostedEvent: counterReducer,
    currentSession: currentSessionReducer,
    listenerStatus: listenerStatusReducer
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