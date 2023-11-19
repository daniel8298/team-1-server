import { Menu, MenuItem, Typography } from "@mui/material";
interface UserMenuProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  settings: string[];
}
const UserMenu: React.FC<UserMenuProps> = ({ anchorEl, onClose, settings }) => {
  return (
    <Menu
      sx={{ mt: "45px" }}
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorEl)}
      onClose={onClose}
    >
      {settings.map((setting) => (
        <MenuItem key={setting} onClick={onClose}>
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
};
export default UserMenu;
