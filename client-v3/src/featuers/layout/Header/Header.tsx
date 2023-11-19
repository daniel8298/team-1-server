import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ButtonHome from "../../products/components/ButtonHome";
import ButtonSignInPage from "../../users/components/ButtonSignInPage";
import CustomerCart from "../../products/components/CustomerCart";
import { getHeaderStyles } from "../../products/helpers/styles";
import TooltipIconButton from "./TooltipIconButton";
import UserMenu from "./UserMenu";
const Header: React.FC = () => {
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [visible, setVisible] = useState(true);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingUp = prevScrollPosition > currentScrollPos;
    setVisible(
      (isScrollingUp && currentScrollPos > 0) || currentScrollPos < 10
    );
    setPrevScrollPosition(currentScrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition, visible]);
  const headerSx = getHeaderStyles({ visible }) || { height: "80px" };
  return (
    <Box sx={headerSx}>
      <ButtonHome />
      <Box sx={{ display: "flex", gap: "12px", marginRight: "12px" }}>
        <ButtonSignInPage />
        <CustomerCart />
        <Box sx={{ flexGrow: 0 }}>
          <TooltipIconButton onClick={handleOpenUserMenu} />
          <UserMenu
            anchorEl={anchorElUser}
            onClose={handleCloseUserMenu}
            settings={settings}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default Header;
