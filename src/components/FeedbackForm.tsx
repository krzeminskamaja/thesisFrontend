import { Button, FormControl, FormHelperText, Input, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import dayjs, { Dayjs } from 'dayjs';
import { useDispatch, useSelector } from "react-redux";
import { updateCustomEvent } from "../redux/actions/customEventActions";
import { postCustomEvent } from "../redux/middleware/customEventAPI";
import { selectSessionIDAndStatus } from "../redux/store";
import { getMarkerTopicName } from "../redux/constants";
import { postFeedback } from "../redux/middleware/feedbackAPI";
import { useNavigate } from "react-router-dom";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function FeedbackForm() {
    const [feedback, setFeedback] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch();
    async function handleSubmit(e: { preventDefault: () => void; }) {
        const payload = {
          feedback: feedback
        }
        e.preventDefault();
        postFeedback(payload,dispatch)
        navigate('/')
      }


    return (
      <div>
        <FormControl>
            <Typography>Please provide your feedback in the field below</Typography>
            <TextField multiline maxRows={5} id="outlined-basic" label="Feedback" value={feedback} onChange={(event) => setFeedback(event.target.value)}/>
            <Button onClick={handleSubmit}>Submit</Button>
      </FormControl>
      </div>
    );
  }

export default FeedbackForm;