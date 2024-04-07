import { createSlice } from '@reduxjs/toolkit'
import { START_NEW_SESSION, START_NEW_SESSION_ERROR, START_NEW_SESSION_LOADING, UPDATE_CUSTOM_EVENT, UPDATE_CUSTOM_EVENT_LOADING } from '../constants';

const initialState: RootSessionState = {
   sessionID: '',
   isLoading: false,
   isError: false,
   status: ''
 };

 interface RootSessionState {
   sessionID: string,
   isLoading: boolean,
   isError: boolean,
   status: string
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
       default:
          return state;
    }
 }
 export default currentSessionReducer;
