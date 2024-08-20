import { Box } from "@mui/material";
import TimerSettings from "./components/TimerSettings";
import TimerBody from "./components/TimerBody";
import { useEffect, useRef } from "react";
import { setAudioRef } from "./store/settingsSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const audioRef = useRef();
  const currentMusic = useSelector((store) => store.settings.currentMusic);
  useEffect(() => {
    dispatch(setAudioRef(audioRef));
  }, []);
  return (
    <Box className={"main_container"}>
      <TimerSettings />
      <TimerBody />
      <Box>
        <audio
          ref={audioRef}
          id="audio329"
          src={currentMusic.src}
          type={"audio.mpeg"}
        />
      </Box>
    </Box>
  );
}

export default App;
