import { Button, FormControl, FormHelperText, Input, InputLabel, TextField } from "@mui/material";
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

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function CustomEventForm() {
    const [eventType, setEventType] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [parentPatient, setParentPatient] = useState('');
    const [value, onChange] = useState<Value>(new Date());
    const dispatch = useDispatch();
    async function handleSubmit(e: { preventDefault: () => void; }) {
        dispatch(updateCustomEvent(eventType,eventDescription,parentPatient,Date.now().toLocaleString().toString()))
        e.preventDefault();
        console.log(eventType)
        console.log(eventDescription)
        console.log(parentPatient)
        postCustomEvent({ eventType: eventType,
          eventDescription: eventDescription,
          who: parentPatient,
          when: Date.now().toLocaleString().toString() },dispatch)
      }


    return (
      <div>
        <FormControl>
            <TextField id="outlined-basic" label="Type of event" value={eventType} onChange={(event) => setEventType(event.target.value)}/>
            <TextField id="filled-basic" label="Event description" value={eventDescription} onChange={(event) => setEventDescription(event.target.value)}/>
            <TextField id="standard-basic" label="Parent or patient" value={parentPatient} onChange={(event) => setParentPatient(event.target.value)}/>
            <Button onClick={handleSubmit}>Submit</Button>
      </FormControl>
      </div>
    );
  }

export default CustomEventForm;