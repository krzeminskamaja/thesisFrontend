import { Dispatch, UnknownAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CustomEventType } from "../../types/CustomEventType";
import { UseDispatch } from "react-redux";
import { updateCustomEventError, updateCustomEventLoading } from "../actions/customEventActions";
import { bffHostAndPort, pythonListenersHostAndPort } from "../../constants";
import { SessionType } from "../../types/NewSessionType";
import { ConsentCollectionType } from "../../types/ConsentCollectionType";
import { consentsHandled } from "../actions/startNewSessionActions";
import { FeedbackType } from "../../types/FeedbackType";

export const postFeedback = (payload: FeedbackType,dispatch: Dispatch<UnknownAction>) => {
  /*dispatch(updateCustomEventLoading(error)*/  
  axios.post(
    bffHostAndPort + '/api/feedbacks',
        payload,
        { headers: { 'Content-Type': 'application/json' } }
      ).then((response)=>{ console.log(response); /*dispatch(consentsHandled())*/}).catch((error)=> console.log(error) /*dispatch(updateCustomEventError(error)*/)
 };
