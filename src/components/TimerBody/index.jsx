import { Box, Button, Slider, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useSelector } from "react-redux";

//
const getBeautifulTimeValue = (value) => {
  const minutes = Math.floor(value / 60);
  const seconds = value % 60;
  return [minutes, seconds];
};

// --------------------------------------------------------
const TimerBody = () => {
  const [timerValue, setTimerValue] = useState(3);
  const [currentTimerId, setCurrentTimerId] = useState(null);
  //
  const audioRef = useSelector((state) => state.settings.audioRef);
  const [minutesValue, setMinutesValue] = useState(0);
  const [secondsValue, setSecondsValue] = useState(0);
  const onHandleChangeMinutesValue = (e) => {
    const newValue = Math.abs(+e.target.value);
    if (newValue > 60) setMinutesValue(60);
    else setMinutesValue(newValue);
  };
  const onHandleChangeSecondsValue = (e) => {
    const newValue = Math.abs(e.target.value);
    if (newValue > 59) setSecondsValue(59);
    else setSecondsValue(newValue);
  };
  //
  const [minutes, seconds] = getBeautifulTimeValue(timerValue);

  const onSetInputsValues = () =>
    setTimerValue(minutesValue * 60 + +secondsValue);
  //
  const onTimerStop = () => {
    // audioRef.current.pause();
    clearInterval(currentTimerId);
    setCurrentTimerId(null);
  };

  const playMusicFunc = () => {
    audioRef.current.play();
    setTimeout(() => {
      audioRef.current.pause();
    }, 3000);
  };
  const onTimerStart = () => {
    // audioRef.current.play();
    const timerId = setInterval(() => {
      setTimerValue((prev) => {
        if (prev === 0) {
          // playMusic
          playMusicFunc();
          // onTimerStop();
          clearInterval(currentTimerId);
          setCurrentTimerId(null);
          return 0;
        } else return prev - 1;
      });
    }, 1000);
    setCurrentTimerId(timerId);
  };
  //
  const isInputValuesEqualCurrentTime =
    timerValue === minutesValue * 60 + secondsValue;
  useEffect(() => {
    if (!isInputValuesEqualCurrentTime && !currentTimerId) {
      setMinutesValue(minutes);
      setSecondsValue(seconds);
    }
  }, [timerValue]);
  //
  return (
    <Box maxHeight={300}>
      <Typography variant="h1">
        {minutes}:{seconds}
      </Typography>
      <Slider
        value={timerValue}
        onChange={(e) => setTimerValue(e.target.value)}
        max={3600}
        disabled={currentTimerId}
        color="secondary"
      />
      <Box className={styles.timerFieldsBox}>
        <TextField
          value={minutesValue}
          onChange={onHandleChangeMinutesValue}
          disabled={currentTimerId}
          label={"минуты"}
          color="secondary"
          type="number"
        />
        <TextField
          value={secondsValue}
          onChange={onHandleChangeSecondsValue}
          disabled={currentTimerId}
          label={"секунды"}
          color="secondary"
          type="number"
        />
        <Button
          onClick={onSetInputsValues}
          disabled={currentTimerId || isInputValuesEqualCurrentTime}
          color="secondary"
          variant="contained"
        >
          OK
        </Button>
      </Box>
      <Box className={styles.timerButtonsBox}>
        <Button
          variant="contained"
          color="secondary"
          disabled={currentTimerId}
          onClick={onTimerStart}
        >
          START
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={onTimerStop}
          disabled={!currentTimerId}
        >
          STOP
        </Button>
      </Box>
    </Box>
  );
};

export default TimerBody;
