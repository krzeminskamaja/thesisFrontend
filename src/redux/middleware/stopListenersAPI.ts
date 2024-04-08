import { Dispatch, UnknownAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CustomEventType } from "../../types/CustomEventType";
import { UseDispatch } from "react-redux";
import { updateCustomEventError, updateCustomEventLoading } from "../actions/customEventActions";
import { pythonListenersHostAndPort } from "../../constants";
import { ListenerDevicesType } from "../../types/ListenerDevicesType";
import { ListenerType } from "../../types/ListenerType";

export const postStopListeners = (payload: ListenerDevicesType) => {
  /*dispatch(updateCustomEventLoading(error)*/  
  axios.post(
    pythonListenersHostAndPort + '/stopListeners',
        payload,
        { headers: { 'Content-Type': 'application/json' } }
      ).then((response)=> console.log(response)).catch((error)=> console.log(error) /*dispatch(updateCustomEventError(error)*/)
 };

 export const postStopListener = (payload: ListenerType) => {
  /*dispatch(updateCustomEventLoading(error)*/  
  axios.post(
    pythonListenersHostAndPort + '/stopListener',
        { listenerID: payload.name},
        { headers: { 'Content-Type': 'application/json' } }
      ).then((response)=> console.log(response)).catch((error)=> console.log(error) /*dispatch(updateCustomEventError(error)*/)
 };
