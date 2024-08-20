import {
  Box,
  Button,
  Dialog,
  IconButton,
  MenuItem,
  Select,
  Switch,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentMusic } from "../../store/settingsSlice";
import { musicOptions } from "../../store/settingsSlice/utils";

const TimerSettings = () => {
  const dispatch = useDispatch();
  // const [currentMusic, setCurrentMusic] = useState(musicOptions[0].id);
  const currentMusic = useSelector((store) => store.settings.currentMusic.id);
  const changeCurrentMusic = (id) => dispatch(setCurrentMusic(id));

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  useEffect(() => {
    console.log(
      (document.body.style.backgroundImage =
        "url(https://i.pinimg.com/originals/ca/7e/4d/ca7e4daa89582bf891247f6a4b5a113e.jpg)")
    );
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    
  }, []);
  return (
    <Box className={styles.timerSettings}>
      <IconButton color="secondary" onClick={() => setIsDialogOpen(true)}>
        <SettingsIcon />
      </IconButton>
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <Box width={350} height={600}>
          DIALOG
          <Box>
            <Switch color="secondary" />
            <Select
              value={currentMusic}
              // onChange={(e) => setCurrentMusic(e.target.value)}
              onChange={(e) => changeCurrentMusic(e.target.value)}
            >
              {musicOptions.map((musicItem) => (
                <MenuItem key={musicItem.id} value={musicItem.id}>
                  {musicItem.title}
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
              OK
            </Button>
            <Button
              onClick={() => setIsDialogOpen(false)}
              variant="outlined"
              color="secondary"
            >
              CLOSE
            </Button>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default TimerSettings;
