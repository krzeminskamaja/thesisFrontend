import { createSlice } from '@reduxjs/toolkit'
import { USER_LOGGED_IN, CLEAN_USER, CONSENTS_HANDLED } from '../constants';

const initialState: RootUserState = {
   name: '',
   pass: '',
   isLoggedIn: false,
   isError: false,
   isLoading: false
 };

 interface RootUserState {
   name: string,
   pass: string,
   isLoggedIn: boolean,
   isLoading: boolean,
   isError: boolean
 }

 const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
       case USER_LOGGED_IN:
          return {
            ...state, 
            isLoggedIn: true
          }
      case CLEAN_USER:
         return {
            ...state, ...initialState
          } 
       default:
          return state;
    }
 }
 export default userReducer;
