import { Button, FormControl, FormHelperText, Input, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import DateTimePicker from 'react-datetime-picker'
import { useDispatch, useSelector } from "react-redux";
import { updateCustomEvent } from "../redux/actions/customEventActions";
import { postCustomEvent } from "../redux/middleware/customEventAPI";
import { selectListenerStatus, selectSessionIDAndStatus } from "../redux/store";
import { postStopListener, postStopListeners } from "../redux/middleware/stopListenersAPI";
import { getListenersStatus } from "../redux/middleware/getListenersStatusAPI";
import { ListenerType } from "../types/ListenerType";
import { postStartListener } from "../redux/middleware/startListenersAPI";

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


    return (
      <div>
        <FormControl>
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
      </FormControl>
      </div>
    );
  }

export default CurrentSessionView;