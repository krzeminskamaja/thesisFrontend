import { Dispatch, UnknownAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CustomEventType } from "../../types/CustomEventType";
import { UseDispatch } from "react-redux";
import { updateCustomEventError, updateCustomEventLoading } from "../actions/customEventActions";
import { bffHostAndPort } from "../../constants";

export const postCustomEvent = (payload: CustomEventType, dispatch: Dispatch<UnknownAction>) => {
  /*minimal logging xd*/  
  console.log('posting custom event:')
  console.log(payload)
  axios.post(
      bffHostAndPort + '/newCustomEvent',
        payload,
        { headers: { 'Content-Type': 'application/json' } }
      ).then((response)=> console.log(response)).catch((error)=> console.log(error) /*dispatch(updateCustomEventError(error)*/)
 };

 