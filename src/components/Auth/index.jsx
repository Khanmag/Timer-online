import { Box, IconButton, Typography } from "@mui/material";
import LogInIcon from "@mui/icons-material/ExitToApp";
import LogoutIcon from "@mui/icons-material/Logout";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../api/firebase";

import styles from "./index.module.scss";
import { useEffect, useState } from "react";

const Auth = () => {
  const [currentUser, setCurrentUser] = useState({});
  const onSignIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data);
      const newUser = {
        name: data.user.displayName,
        email: data.user.email,
      };
      setCurrentUser(newUser);
    });
  };
  const onSignOut = () => {
    auth.signOut();
    setCurrentUser(null);
  };
  // useEffect(() => {
  //   // console.log(auth);
  //   if (auth.currentUser) {
  //     setCurrentUser({
  //       name: auth.currentUser.displayName,
  //       email: auth.currentUser.email,
  //     });
  //   } else {
  //     setCurrentUser({});
  //   }
  // }, [auth.currentUser]);
  return (
    <Box className={styles.authBox}>
      {currentUser.name ? (
        <Box>
          <Typography>{currentUser?.name}</Typography>
          <IconButton onClick={onSignOut}>
            <LogoutIcon />
          </IconButton>
        </Box>
      ) : (
        <Box>
          <Typography>anonym</Typography>
          <IconButton onClick={onSignIn}>
            <LogInIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default Auth;
