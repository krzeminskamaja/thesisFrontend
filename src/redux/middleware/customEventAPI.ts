import { Dispatch, UnknownAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CustomEventType } from "../../types/CustomEventType";
import { UseDispatch } from "react-redux";
import { updateCustomEventError, updateCustomEventLoading } from "../actions/customEventActions";
import { bffHostAndPort } from "../../constants";

export const postCustomEvent = (payload: CustomEventType, dispatch: Dispatch<UnknownAction>) => {
  /*dispatch(updateCustomEventLoading(error)*/  
  axios.post(
      bffHostAndPort + '/newCustomEvent',
        payload,
        { headers: { 'Content-Type': 'application/json' } }
      ).then((response)=> console.log(response)).catch((error)=> console.log(error) /*dispatch(updateCustomEventError(error)*/)
 };

 