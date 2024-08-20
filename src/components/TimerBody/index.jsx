import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import styles from "./index.module.scss";
import { useSelector } from "react-redux";
import TimerInputs from "./TimerInputs";
import gifLoader from "../../assets/gif_loader.gif";

//
const getBeautifulTimeValue = (value) => [Math.floor(value / 60), value % 60];

// --------------------------------------------------------
const TimerBody = () => {
  const [timerValue, setTimerValue] = useState(3);
  const [currentTimerId, setCurrentTimerId] = useState(null);
  //
  const audioRef = useSelector((state) => state.settings.audioRef);
  const [minutes, seconds] = getBeautifulTimeValue(timerValue);

  const onTimerStop = () => {
    clearInterval(currentTimerId);
    setCurrentTimerId(null);
  };
  const playFinalAudio = () => {
    audioRef.current.play();
    setTimeout(() => {
      audioRef.current.pause();
    }, 3000);
  };
  const onTimerStart = () => {
    const timerId = setInterval(() => {
      setTimerValue((prev) => {
        if (prev === 0) {
          playFinalAudio();
          clearInterval(timerId);
          setCurrentTimerId(null);
          return 0;
        } else return prev - 1;
      });
    }, 1000);
    setCurrentTimerId(timerId);
  };

  return (
    <Box className={styles.mainTimerBox}>
      <div
        className={styles.gifLoader}
        style={{ backgroundImage: `url(${gifLoader})` }}
      />
      <Typography variant="h1">
        {minutes}:{seconds}
      </Typography>
      <TimerInputs
        disabled={!!currentTimerId}
        setTimerValue={setTimerValue}
        timerValue={timerValue}
      />
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
