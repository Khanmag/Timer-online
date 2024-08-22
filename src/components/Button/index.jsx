import { Button } from "@mui/material";
import { useSelector } from "react-redux";

const getColorByTheme = (t) => {
  switch (t) {
    case "blue":
      return "primary";
    case "purple":
      return "secondary";
    case "green":
      return "success";
    default:
      "info";
  }
};

const Button_ = ({ children, ...rest }) => {
  const theme = useSelector((store) => store.settings.theme);
  return (
    <Button {...rest} color={getColorByTheme(theme.color)}>
      {children}
    </Button>
  );
};

export default Button_;
