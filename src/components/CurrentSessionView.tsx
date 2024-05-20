import { Button, FormControl, FormHelperText, Input, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomEvent } from "../redux/actions/customEventActions";
import { postCustomEvent } from "../redux/middleware/customEventAPI";
import { areConsentsHandled, selectListenerStatus, selectSessionIDAndStatus } from "../redux/store";
import { postStopListener, postStopListeners } from "../redux/middleware/stopListenersAPI";
import { getListenersStatus } from "../redux/middleware/getListenersStatusAPI";
import { ListenerType } from "../types/ListenerType";
import { postStartListener } from "../redux/middleware/startListenersAPI";
import CustomEventForm from "./CustomEventForm";

function CurrentSessionView() {
    const sessionData = useSelector(selectSessionIDAndStatus)
    const listeners = useSelector(selectListenerStatus)
    const [sessionID, setSessionID] = useState(sessionData.sessionID)
    const [sessionStatus, setSessionStatus] = useState(sessionData.status)
    const dispatch = useDispatch();
    async function handleSubmit(e: { preventDefault: () => void; }) {
        postStopListeners({ deviceTypes: ["",""]
      })
    }

    async function handleSubmitGetStatus(e: { preventDefault: () => void; }) {
        getListenersStatus(dispatch)
    }

    async function handleSubmitStopStartListener(listener: ListenerType) {
        if(listener.status)
            postStopListener(listener)
        else
            postStartListener({ deviceTypes: [listener.name]})
    }

    const consentsHandled = useSelector(areConsentsHandled)

    return (
      <div>{consentsHandled ? <FormControl>
        <Typography variant="body1">Current session:</Typography>
        <Typography variant="body1">{sessionID}</Typography>
        <Typography variant="body1">Session status:</Typography>
        <Typography variant="body1">{sessionStatus}</Typography>
        <Button onClick={handleSubmit}>Stop all listeners</Button>
        <Button onClick={handleSubmitGetStatus}>Get listener process status</Button>
        {listeners.listeners.length>0 ? listeners.listeners.map((listener: any, index: number) => {
            return (
            <div key={index}>
                <Typography>Listener name: {listener.name}</Typography>
                <Typography>Listener status: {listener.status ? "active" : "inactive"}</Typography>
                <Button onClick={()=>handleSubmitStopStartListener(listener)}>{listener.status ? "Stop listener" : "Start listener" }</Button>
            </div>
            );
        }) : <Typography>No listeners active</Typography>}
        <CustomEventForm></CustomEventForm>
  </FormControl> : <Typography variant="body1">No consents granted</Typography>}
        
      </div>
    );
  }

export default CurrentSessionView;