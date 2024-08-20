import { useEffect, useState } from "react";
import { Box, Button, Slider, TextField } from "@mui/material";
import styles from "./index.module.scss";

const cutZeroBefore = (str) =>
  str.length >= 2 && str[0] === "0" ? cutZeroBefore(str.slice(1)) : str;

const TimerInputs = ({ disabled, timerValue, setTimerValue }) => {
  const [minutesValue, setMinutesValue] = useState(0);
  const [secondsValue, setSecondsValue] = useState(0);
  //
  const onHandleChange = (value, setter) => {
    const newValue = Math.abs(cutZeroBefore(value));
    if (isNaN(newValue)) return null;
    return newValue > 59 ? setter(59) : setter(newValue);
  };
  const onHandleChangeMinutesValue = (e) =>
    onHandleChange(e.target.value, setMinutesValue);
  const onHandleChangeSecondsValue = (e) =>
    onHandleChange(e.target.value, setSecondsValue);
  //
  const onSetInputsValues = () =>
    setTimerValue(minutesValue * 60 + +secondsValue);

  const isInputValuesEqualCurrentTime =
    timerValue === minutesValue * 60 + secondsValue;
  useEffect(() => {
    if (!isInputValuesEqualCurrentTime && !disabled) {
      setMinutesValue(Math.floor(timerValue / 60));
      setSecondsValue(timerValue % 60);
    }
  }, [timerValue]);
  return (
    <Box>
      <Slider
        value={timerValue}
        onChange={(e) => setTimerValue(e.target.value)}
        max={3600}
        disabled={disabled}
        color="secondary"
      />
      <Box className={styles.timerFieldsBox}>
        <TextField
          value={minutesValue}
          onChange={onHandleChangeMinutesValue}
          disabled={disabled}
          label={"минуты"}
          color="secondary"
        />
        <TextField
          value={secondsValue}
          onChange={onHandleChangeSecondsValue}
          disabled={disabled}
          label={"секунды"}
          color="secondary"
        />
        <Button
          onClick={onSetInputsValues}
          disabled={disabled || isInputValuesEqualCurrentTime}
          color="secondary"
          variant="contained"
        >
          OK
        </Button>
      </Box>
    </Box>
  );
};

export default TimerInputs;
