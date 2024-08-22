import { Box } from "@mui/material";
import TimerSettings from "./components/TimerSettings";
import TimerBody from "./components/TimerBody";
import { useEffect, useRef } from "react";
import { setAudioRef, setSignalRef } from "./store/settingsSlice";
import { useDispatch, useSelector } from "react-redux";
import Auth from "./components/Auth";

function App() {
  const dispatch = useDispatch();
  const audioRef = useRef();
  const signalRef = useRef();
  const currentMusic = useSelector((store) => store.settings.currentMusic);
  const currentSignal = useSelector((store) => store.settings.currentSignal);
  const currentBG = useSelector((store) => store.settings.currentBG);
  const isOnBG = useSelector((store) => store.settings.isOnBG);
  useEffect(() => {
    dispatch(setAudioRef(audioRef));
    dispatch(setSignalRef(signalRef));
  }, []);
  return (
    <Box
      sx={isOnBG ? { backgroundImage: `url("${currentBG.src}")` } : {}}
      className={"main_container"}
    >
      <Auth />
      <TimerSettings />
      <TimerBody />
      <Box>
        <audio ref={audioRef} src={currentMusic.src} type={"audio.mpeg"} />
        <audio ref={signalRef} src={currentSignal.src} type={"audio.mpeg"} />
      </Box>
    </Box>
  );
}

export default App;
