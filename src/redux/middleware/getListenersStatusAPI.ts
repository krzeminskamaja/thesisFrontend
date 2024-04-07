import { Dispatch, UnknownAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CustomEventType } from "../../types/CustomEventType";
import { UseDispatch } from "react-redux";
import { getListenerStatusAction, getListenerStatusError } from "../actions/getListenerStatusActions";
import { pythonListenersHostAndPort } from "../../constants";
import { ListenerDevicesType } from "../../types/ListenerDevicesType";

export const getListenersStatus = (dispatch: Dispatch) => {
  /*dispatch(updateCustomEventLoading(error)*/  
  axios.get(
    pythonListenersHostAndPort + '/getListenersStatus',
        { headers: { 'Content-Type': 'application/json' } }
      ).then((response)=> dispatch(getListenerStatusAction(response.data)))
      .catch((_error)=> dispatch(getListenerStatusError(true)) /*dispatch(updateCustomEventError(error)*/)
 };
