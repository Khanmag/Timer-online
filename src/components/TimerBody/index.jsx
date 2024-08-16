import { Box, Button, Slider, TextField, Typography } from "@mui/material";
import { useState } from "react";

const getBeautifulTimeValue = (value) => {
  const minutes = Math.floor(value / 60);
  const seconds = value % 60;
  return [minutes, seconds];
};

const TimerBody = () => {
  const [timerValue, setTimerValue] = useState(425);
  const [currentTimerId, setCurrentTimerId] = useState(null);
  const [minutesValue, setMinutesValue] = useState(0);
  const onHandleChangeMinutesValue = (e) => {
    const newValue = Math.abs(+e.target.value);
    if (newValue > 60) return setMinutesValue(60);
    setMinutesValue(newValue);
  };
  const [secondsValue, setSecondsValue] = useState(0);
  const onHandleChangeSecondsValue = (e) => {
    const newValue = Math.abs(e.target.value);
    if (newValue > 59) return setSecondsValue(59);
    setSecondsValue(newValue);
  };
  const [minutes, seconds] = getBeautifulTimeValue(timerValue);
  const onTimerStart = () => {
    // setTimerValue(minutesValue * 60 + +secondsValue);
    const timerId = setInterval(() => {
      setTimerValue((prev) => prev - 1);
    }, 1000);
    setCurrentTimerId(timerId);
    console.log(currentTimerId);
  };
  const onSetInputsValues = () => {
    setTimerValue(minutesValue * 60 + +secondsValue);
  };
  const onTimerStop = () => {
    clearInterval(currentTimerId);
    setCurrentTimerId(null);
    console.log(currentTimerId);
  };
  return (
    <Box maxHeight={300}>
      <Typography variant="h1">
        {minutes}:{seconds}
      </Typography>
      <Slider
        value={timerValue}
        onChange={(e) => setTimerValue(e.target.value)}
        max={3600}
        color="secondary"
      />
      <Box>
        <TextField
          value={minutesValue}
          onChange={onHandleChangeMinutesValue}
          type="number"
        />
        <TextField
          value={secondsValue}
          onChange={onHandleChangeSecondsValue}
          type="number"
        />
        <Button
          onClick={onSetInputsValues}
          color="secondary"
          variant="contained"
        >
          OK
        </Button>
      </Box>
      <Button disabled={currentTimerId} onClick={onTimerStart}>
        START
      </Button>
      <Button onClick={onTimerStop}>STOP</Button>
    </Box>
  );
};

export default TimerBody;
