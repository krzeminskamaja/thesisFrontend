import { Button, FormControl, FormControlLabel, FormGroup, FormHelperText, Input, InputLabel, Switch, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import { useDispatch } from "react-redux";
import { updateCustomEvent } from "../redux/actions/customEventActions";
import { postCustomEvent } from "../redux/middleware/customEventAPI";
import { postStartListeners } from "../redux/middleware/startListenersAPI";
import { startNewSession } from "../redux/actions/startNewSessionActions";
import { useNavigate } from "react-router-dom";
import { getTopicName } from "../redux/constants";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];



function StartListenersForm() {
    const [sessionID, setSessionID] = useState('');
    const [deviceType1, setDeviceType1] = useState('');
    const [deviceType2, setDeviceType2] = useState('');
    const [deviceType3, setDeviceType3] = useState('');
    const [isParent1, setIsParent1] = useState('');
    const [isParent2, setIsParent2] = useState('');
    const [isParent3, setIsParent3] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    async function handleSubmit(e: { preventDefault: () => void; }) {
      const topicNames = [getTopicName(deviceType1,isParent1,sessionID),getTopicName(deviceType2,isParent2,sessionID),getTopicName(deviceType3,isParent3,sessionID)]

        postStartListeners({ 
          deviceTypes: topicNames.filter((topicName)=>topicName!="")
      })
      dispatch(startNewSession({sessionID: sessionID, status: "STARTED"}))
      navigate('/currentSessionView')
    }

    return (
      <div>
        <FormControl>
        <Typography variant="body1">Provide a unique session ID</Typography>
            <TextField id="outlined-basic" label="Your session ID" value={sessionID} onChange={(event) => setSessionID(event.target.value)}/>
            <Typography>The session ID will be prepended with today's date, resulting in the following format: "YYYY-MM-DD_your-session-ID"</Typography>
            
            <TextField id="outlined-basic" label="Type of device 1" value={deviceType1} onChange={(event) => setDeviceType1(event.target.value)}/>
            <FormGroup>
              <FormControlLabel control={<Switch value={isParent1} onChange={(event,checked) => setIsParent1(checked.toString())}/>} label="is parent" />
            </FormGroup>
            <TextField id="filled-basic" label="Type of device 2" value={deviceType2} onChange={(event) => setDeviceType2(event.target.value)}/>
            <FormGroup>
              <FormControlLabel control={<Switch value={isParent2} onChange={(event,checked) => setIsParent2(checked.toString())}/>} label="is parent" />
            </FormGroup>
            <TextField id="filled-basic" label="Type of device 3" value={deviceType3} onChange={(event) => setDeviceType3(event.target.value)}/>
            <FormGroup>
              <FormControlLabel control={<Switch value={isParent3} onChange={(event,checked) => setIsParent3(checked.toString())}/>} label="is parent" />
            </FormGroup>
            <Button onClick={handleSubmit}>Submit</Button>
      </FormControl>
      </div>
    );
  }

export default StartListenersForm;