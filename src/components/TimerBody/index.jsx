import { Box, Button, Dialog, Typography } from "@mui/material";
import { useState } from "react";
import styles from "./index.module.scss";
import { useSelector } from "react-redux";
import TimerInputs from "./TimerInputs";
import gifLoader from "../../assets/gif_loader.gif";
import { Transition } from "react-transition-group";

//
const getBeautifulTimeValue = (value) => [Math.floor(value / 60), value % 60];

// --------------------------------------------------------
const TimerBody = () => {
  const [timerValue, setTimerValue] = useState(3);
  const [currentTimerId, setCurrentTimerId] = useState(null);
  const [isMusicDialogOpen, setIsMusicDialogOpen] = useState(false);
  //
  const audioRef = useSelector((state) => state.settings.audioRef);
  const signalRef = useSelector((state) => state.settings.signalRef);
  const [minutes, seconds] = getBeautifulTimeValue(timerValue);

  const playFinalSignal = () => {
    signalRef.current.play();
    // setTimeout(() => {
    //   audioRef.current.pause();
    // }, 3000);
  };
  const playMusic = () => audioRef.current.play();
  const pauseMusic = () => audioRef.current.pause();

  const onTimerStop = () => {
    clearInterval(currentTimerId);
    setCurrentTimerId(null);
    pauseMusic();
  };
  const onClickStart = () => setIsMusicDialogOpen(true);
  const onTimerStart = (withMusic) => {
    if (withMusic) playMusic();
    setIsMusicDialogOpen(false);
    const timerId = setInterval(() => {
      setTimerValue((prev) => {
        if (prev === 0) {
          playFinalSignal();
          clearInterval(timerId);
          setCurrentTimerId(null);
          pauseMusic();
          return 0;
        } else return prev - 1;
      });
    }, 1000);
    setCurrentTimerId(timerId);
  };

  return (
    <>
      <Box className={styles.mainTimerBox}>
        <Transition
          in={!!currentTimerId}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              className={`${styles.gifLoader} ${styles[state]}`}
              style={{ backgroundImage: `url(${gifLoader})` }}
            />
          )}
        </Transition>
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
            // onClick={onTimerStart}
            onClick={onClickStart}
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
      {/* --------------- */}
      <Dialog
        open={isMusicDialogOpen}
        onClose={() => setIsMusicDialogOpen(false)}
      >
        <Box p={2}>
          <Box my={2}>
            <Typography>Хотите ли вы включить музыку?</Typography>
          </Box>
          <Box display={"flex"} justifyContent={"space-evenly"} p={1}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => onTimerStart(true)}
            >
              Да
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => onTimerStart()}
            >
              Нет
            </Button>
          </Box>
          <Box display={"flex"} justifyContent={"center"} p={1}>
            <Button
              color="secondary"
              onClick={() => setIsMusicDialogOpen(false)}
            >
              Отмена
            </Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default TimerBody;
