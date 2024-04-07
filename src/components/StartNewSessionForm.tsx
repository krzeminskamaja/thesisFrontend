import { Button, FormControl, FormHelperText, Input, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import DateTimePicker from 'react-datetime-picker'
import { useDispatch } from "react-redux";
import { updateCustomEvent } from "../redux/actions/customEventActions";
import { postCustomEvent } from "../redux/middleware/customEventAPI";
import { postStartListeners } from "../redux/middleware/startListenersAPI";
import { postStartNewSession } from "../redux/middleware/startNewSession";
import { startNewSession } from "../redux/actions/startNewSessionActions";
import { useNavigate } from "react-router-dom";

function StartListenersForm() {
    const [sessionID, setSessionID] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    async function handleSubmit(e: { preventDefault: () => void; }) {
        navigate('/currentSessionView')
        dispatch(startNewSession({sessionID: sessionID, status: "STARTED"}))
        postStartNewSession({ sessionID: sessionID, status: "STARTED"
      })
    }

    return (
      <div>
        <FormControl>
          <Typography variant="body1">Provide a unique session ID</Typography>
            <TextField id="outlined-basic" label="Your session ID" value={sessionID} onChange={(event) => setSessionID(event.target.value)}/>
            <Typography>The session ID will be prepended with today's date, resulting in the following format: "YYYY-MM-DD_your-session-ID"</Typography>
            <Button onClick={handleSubmit}>Start recording session</Button>
      </FormControl>
      </div>
    );
  }

export default StartListenersForm;