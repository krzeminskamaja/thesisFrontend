import { createSlice } from '@reduxjs/toolkit'
import { UPDATE_CUSTOM_EVENT, UPDATE_CUSTOM_EVENT_LOADING } from '../constants';

const initialState = {
    eventType: "",
    eventDescription: "",
    parentPatient: "",
    dateTime: new Date(),
    isLoading: false,
    isError: false
 };
 const customEventReducer = (state = initialState, action: any) => {
    switch (action.type) {
       case UPDATE_CUSTOM_EVENT:
          return Object.assign({}, state, action.payload)
       case UPDATE_CUSTOM_EVENT_LOADING:
         return Object.assign({}, state.isLoading, action.payload)
       default:
          return state;
    }
 }
 export default customEventReducer;