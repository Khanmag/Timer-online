import { Box, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

import styles from './index.module.scss'

const TimerSettings = () => {
  return (
    <Box className={styles.timerSettings}>
      <IconButton>
        <SettingsIcon />
      </IconButton>
    </Box>
  );
};

export default TimerSettings;
