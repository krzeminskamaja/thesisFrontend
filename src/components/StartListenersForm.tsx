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
import { postStartListeners } from "../redux/middleware/startListenersAPI";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function StartListenersForm() {
    const [deviceType1, setDeviceType1] = useState('');
    const [deviceType2, setDeviceType2] = useState('');
    async function handleSubmit(e: { preventDefault: () => void; }) {
        postStartListeners({ deviceTypes: [deviceType1,deviceType2]
      })
    }

    return (
      <div>
        <FormControl>
            <TextField id="outlined-basic" label="Type of device 1" value={deviceType1} onChange={(event) => setDeviceType1(event.target.value)}/>
            <TextField id="filled-basic" label="Type of device 2" value={deviceType2} onChange={(event) => setDeviceType2(event.target.value)}/>
            <Button onClick={handleSubmit}>Submit</Button>
      </FormControl>
      </div>
    );
  }

export default StartListenersForm;