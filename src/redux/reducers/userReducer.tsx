import { createSlice } from '@reduxjs/toolkit'
import { USER_LOGGED_IN } from '../constants';

const initialState: RootUserState = {
   login: '',
   isLoggedIn: false,
   isError: false,
   isLoading: false
 };

 interface RootUserState {
   login: string,
   isLoggedIn: boolean,
   isLoading: boolean,
   isError: boolean
 }

 const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
       case USER_LOGGED_IN:
          return {
            ...state, ...action.payload
          }
       default:
          return state;
    }
 }
 export default userReducer;
