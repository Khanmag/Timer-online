import {
  Box,
  Button,
  Dialog,
  FormControlLabel,
  IconButton,
  MenuItem,
  Select,
  Switch,
  Typography,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

import styles from "./index.module.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentBG,
  setCurrentMusic,
  setCurrentSignal,
} from "../../store/settingsSlice";
import {
  backgroundOptions,
  musicOptions,
  signalOptions,
} from "../../store/settingsSlice/utils";

const TimerSettings = () => {
  const dispatch = useDispatch();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const currentMusic = useSelector((store) => store.settings.currentMusic.id);
  const currentSignal = useSelector((store) => store.settings.currentSignal.id);
  const currentBG = useSelector((store) => store.settings.currentBG.id);
  const changeCurrentMusic = (id) => dispatch(setCurrentMusic(id));
  const changeCurrentSignal = (id) => dispatch(setCurrentSignal(id));
  const changeCurrentBG = (id) => dispatch(setCurrentBG(id));

  // const setBodyBG = (img) => {
  //   console.log("CHANGE BODY BG", img, document.body.backgroundImage);

  //   // document.body.background = `#ff0000`;
  //   document.body.background = `url("${img}")`;
  // };
  // useEffect(() => {
  //   const currentBGObj = backgroundOptions.find(
  //     (item) => item.id === currentBG
  //   );
  //   // console.log("CHANGE BG", currentBGObj);
  //   if (currentBGObj) setBodyBG(currentBGObj.src);
  // }, [currentBG]);

  return (
    <Box className={styles.timerSettings}>
      <IconButton color="secondary" onClick={() => setIsDialogOpen(true)}>
        <SettingsIcon />
      </IconButton>
      {/* ------------------------------------------------------------ */}
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <Box className={styles.dialogMainBox}>
          <Box p={1}>
            <Typography textAlign={"center"} variant="h5">
              Настройки
            </Typography>
          </Box>
          {/* Music */}
          <Box display={"flex"} justifyContent={"space-evenly"} mb={2}>
            <FormControlLabel
              control={<Switch color="secondary" />}
              label={"Музыка"}
            />
            <Select
              value={currentMusic}
              color={"secondary"}
              onChange={(e) => changeCurrentMusic(e.target.value)}
            >
              {musicOptions.map((musicItem) => (
                <MenuItem key={musicItem.id} value={musicItem.id}>
                  {musicItem.title}
                </MenuItem>
              ))}
            </Select>
          </Box>
          {/* Signal */}
          <Box display={"flex"} justifyContent={"space-evenly"} mb={2}>
            <FormControlLabel
              control={<Switch color="secondary" />}
              label={"Сигнал"}
            />
            <Select
              value={currentSignal}
              color={"secondary"}
              onChange={(e) => changeCurrentSignal(e.target.value)}
            >
              {signalOptions.map(({ id, title }) => (
                <MenuItem key={id} value={id}>
                  {title}
                </MenuItem>
              ))}
            </Select>
          </Box>
          {/* BGs */}
          <Box display={"flex"} justifyContent={"space-evenly"} mb={2}>
            <FormControlLabel
              control={<Switch color="secondary" />}
              label={"Обои"}
            />
            <Select
              value={currentBG}
              color={"secondary"}
              onChange={(e) => changeCurrentBG(e.target.value)}
            >
              {backgroundOptions.map(({ id, title }) => (
                <MenuItem key={id} value={id}>
                  {title}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box display={"flex"} justifyContent={"space-evenly"}>
            <Button
              onClick={() => setIsDialogOpen(false)}
              variant="contained"
              color="secondary"
            >
              Сохранить
            </Button>
            <Button
              onClick={() => setIsDialogOpen(false)}
              variant="outlined"
              color="secondary"
            >
              Отмена
            </Button>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default TimerSettings;
