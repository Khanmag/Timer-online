import { IconButton } from "@mui/material";
import { getColorByTheme } from ".";
import { useSelector } from "react-redux";

const IconButton_ = ({ children, ...rest }) => {
  const theme = useSelector((store) => store.settings.theme);
  return (
    <IconButton className="greenBUTTON" {...rest} color={getColorByTheme(theme.color)}>
      {children}
    </IconButton>
  );
};

export default IconButton_;
