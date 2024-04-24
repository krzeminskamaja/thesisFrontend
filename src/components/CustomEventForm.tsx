import { Button, FormControl, FormHelperText, Input, InputLabel, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import { useDispatch } from "react-redux";
import { updateCustomEvent } from "../redux/actions/customEventActions";
import { postCustomEvent } from "../redux/middleware/customEventAPI";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function CustomEventForm() {
    const [eventType, setEventType] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [who, setWho] = useState('');
    const [value, onChange] = useState<Value>(new Date());
    const dispatch = useDispatch();
    async function handleSubmit(e: { preventDefault: () => void; }) {
        const payload = {
          eventType: eventType,
          eventDescription: eventDescription,
          who: who,
          when: new Intl.DateTimeFormat('dk-DK', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date.now())
        }
        dispatch(updateCustomEvent(payload))
        e.preventDefault();
        postCustomEvent(payload,dispatch)
      }


    return (
      <div>
        <FormControl>
            <TextField id="outlined-basic" label="Type of event" value={eventType} onChange={(event) => setEventType(event.target.value)}/>
            <TextField id="filled-basic" label="Event description" value={eventDescription} onChange={(event) => setEventDescription(event.target.value)}/>
            <TextField id="standard-basic" label="Parent or patient" value={who} onChange={(event) => setWho(event.target.value)}/>
            <Button onClick={handleSubmit}>Submit</Button>
      </FormControl>
      </div>
    );
  }

export default CustomEventForm;