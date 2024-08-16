import { Box } from "@mui/material";
import TimerSettings from "./components/TimerSettings";
import TimerBody from "./components/TimerBody";

function App() {
  return (
    <Box className={"main_container"}>
      <TimerSettings />
      <TimerBody />
    </Box>
  );
}

export default App;
