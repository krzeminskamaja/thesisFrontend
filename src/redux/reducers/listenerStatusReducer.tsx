import { createSlice } from '@reduxjs/toolkit'
import { GET_LISTENER_STATUS, GET_LISTENER_STATUS_ERROR, GET_LISTENER_STATUS_LOADING, START_NEW_SESSION, START_NEW_SESSION_ERROR, START_NEW_SESSION_LOADING, UPDATE_CUSTOM_EVENT, UPDATE_CUSTOM_EVENT_LOADING } from '../constants';
import { ListenerType } from '../../types/ListenerType';

const initialState: RootListenerState = {
   listeners: [],
   isLoading: false,
   isError: false
 };

 interface RootListenerState {
   listeners: ListenerType[],
   isLoading: boolean,
   isError: boolean
 }

 const listenerStatusReducer = (state = initialState, action: any) => {
    switch (action.type) {
       case GET_LISTENER_STATUS:
         console.log(action.payload)
          return {
            ...state, listeners: action.payload
          }
       case GET_LISTENER_STATUS_LOADING:
         return Object.assign({}, state.isLoading, action.payload)
      case GET_LISTENER_STATUS_ERROR:
         console.log('in error function')
         return {
            ...state, listeners: [], isError: true
          }
       default:
          return state;
    }
 }
 export default listenerStatusReducer;
