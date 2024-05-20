import { Button, FormControl, FormControlLabel, FormGroup, FormHelperText, Input, InputLabel, Switch, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import { useDispatch } from "react-redux";
import { updateCustomEvent } from "../redux/actions/customEventActions";
import { postCustomEvent } from "../redux/middleware/customEventAPI";
import { postStartListeners } from "../redux/middleware/startListenersAPI";
import { postStartNewSession } from "../redux/middleware/startNewSession";
import { startNewSession } from "../redux/actions/startNewSessionActions";
import { useNavigate } from "react-router-dom";
import { postSaveConsentIds } from "../redux/middleware/saveConsentIds";

function SaveConsentForm() {
  const [sessionID, setSessionID] = useState('');
    const [consentID1, setConsentID1] = useState('');
    const [consentID2, setConsentID2] = useState('');
    const [consentID3, setConsentID3] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    async function handleSubmit(e: { preventDefault: () => void; }) {
        navigate('/startListeners')
        dispatch(startNewSession({sessionID: sessionID, status: "STARTED"}))
        postSaveConsentIds({sessionID: sessionID, consents: [consentID1,consentID2,consentID3]},dispatch)
    }
    

    return (
      <div>
        <FormControl>
        <Typography variant="body1">Provide a unique session ID</Typography>
            <TextField id="outlined-basic" label="Your session ID" value={sessionID} onChange={(event) => setSessionID(event.target.value)}/>
            
        <Typography variant="body1">Provide all relevant GDPR consent IDs</Typography>
            <TextField id="outlined-basic" label="Provide consent ID 1" value={consentID1} onChange={(event) => setConsentID1(event.target.value)}/>
            <TextField id="filled-basic" label="Provide consent ID 2" value={consentID2} onChange={(event) => setConsentID2(event.target.value)}/>
            <TextField id="filled-basic" label="Provide consent ID 3" value={consentID3} onChange={(event) => setConsentID3(event.target.value)}/>
            <Button onClick={handleSubmit}>Submit</Button>
      </FormControl>
      </div>
    );
  }

export default SaveConsentForm;