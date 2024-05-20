import { Dispatch, UnknownAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CustomEventType } from "../../types/CustomEventType";
import { UseDispatch } from "react-redux";
import { updateCustomEventError, updateCustomEventLoading } from "../actions/customEventActions";
import { bffHostAndPort } from "../../constants";
import { updateUserLogin } from "../actions/userActions";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const getUserByName = (name: string, pass: string, dispatch: Dispatch<UnknownAction>, navigate: NavigateFunction) => {
  /*minimal logging xd*/  
  console.log('gettin user by name')
  console.log(name)
  axios.post(
    bffHostAndPort + '/api/users',
      {name: name, pass: pass},
      { headers: { 'Content-Type': 'application/json' } }
    ).then((response)=>{ dispatch(updateUserLogin(response.data)); navigate("/")}).catch((error)=> console.log(error) /*dispatch(updateCustomEventError(error)*/)
 };


 