import { Button, FormControl, FormHelperText, Input, InputLabel, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";


// Require in the client-side class of atomic-kafka
const AtomicKafkaClient = require('atomic-kafka/client').default

    // Instantiation of the client class using the server that was also used to instantiate
// the server class
const akc = new AtomicKafkaClient('http://localhost:3001');


function CustomEventForm() {
    const [eventType, setEventType] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [parentPatient, setParentPatient] = useState('');
    async function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        console.log(eventType)
        console.log(eventDescription)
        console.log(parentPatient)
        const response = await axios.post(
          'http://localhost:8080/greeting',
          { eventType: eventType,
            eventDescription: eventDescription,
            who: parentPatient,
            when: Date.now().toString() },
          { headers: { 'Content-Type': 'application/json' } }
        )
        console.log(response.data)
      }


    return (
        <FormControl>
            <TextField id="outlined-basic" label="Type of event" value={eventType} onChange={(event) => setEventType(event.target.value)}/>
            <TextField id="filled-basic" label="Event description" value={eventDescription} onChange={(event) => setEventDescription(event.target.value)}/>
            <TextField id="standard-basic" label="Parent or patient" value={parentPatient} onChange={(event) => setParentPatient(event.target.value)}/>
            <Button onClick={handleSubmit}>Submit</Button>
            <Button>Should be able to adjust the date and time before sending, defaulting to now</Button>
      </FormControl>
    );
  }

export default CustomEventForm;