import { Dispatch, UnknownAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CustomEventType } from "../../types/CustomEventType";
import { UseDispatch } from "react-redux";
import { updateCustomEventError, updateCustomEventLoading } from "../actions/customEventActions";
import { pythonListenersHostAndPort } from "../../constants";
import { SessionType } from "../../types/NewSessionType";

export const postStartNewSession = (payload: SessionType) => {
  /*dispatch(updateCustomEventLoading(error)*/  
  axios.post(
    pythonListenersHostAndPort + '/startNewSession',
        payload,
        { headers: { 'Content-Type': 'application/json' } }
      ).then((response)=> console.log(response)).catch((error)=> console.log(error) /*dispatch(updateCustomEventError(error)*/)
 };
