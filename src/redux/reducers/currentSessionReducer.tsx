import { createSlice } from '@reduxjs/toolkit'
import { CONSENTS_HANDLED, START_NEW_SESSION, START_NEW_SESSION_ERROR, START_NEW_SESSION_LOADING, UPDATE_CUSTOM_EVENT, UPDATE_CUSTOM_EVENT_LOADING } from '../constants';

const initialState: RootSessionState = {
   sessionID: '',
   isLoading: false,
   isError: false,
   status: '',
   consentsHandled: false
 };

 interface RootSessionState {
   sessionID: string,
   isLoading: boolean,
   isError: boolean,
   status: string,
   consentsHandled: boolean
 }

 const currentSessionReducer = (state = initialState, action: any) => {
    switch (action.type) {
       case START_NEW_SESSION:
          return {
            ...state, ...action.payload
          }
       case START_NEW_SESSION_LOADING:
         return Object.assign({}, state.isLoading, action.payload)
      case START_NEW_SESSION_ERROR:
         return Object.assign({}, state.isError, action.payload)
      case CONSENTS_HANDLED:
         return {
            ...state, 
            consentsHandled: true
         }  
       default:
          return state;
    }
 }
 export default currentSessionReducer;
