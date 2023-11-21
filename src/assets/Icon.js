import LogoutIcon from "@mui/icons-material/Logout";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export default function Icon(props) {
  const { name, size, ...rest } = props;
  switch (name) {
    case "LogoutIcon":
      return <LogoutIcon fontSize={size} {...rest} />;
    case "StarIcon":
      return <StarBorderIcon fontSize={size} {...rest} />;
    case "BellIcon":
      return <NotificationsNoneIcon fontSize={size} {...rest} />;
    default:
      return null;
  }
}
