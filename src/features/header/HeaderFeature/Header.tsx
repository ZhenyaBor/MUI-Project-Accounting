import { AppBar, IconButton, Stack, Typography, Box } from "@mui/material";
import { palette } from "theme";
import { DrawerMenu, NavLickCustom } from "./components";
import { RxHamburgerMenu } from "react-icons/rx";
import { useOpenDrawer } from "../hooks";
import { useLocation } from "react-router-dom";

const menuHeader = [
  { to: "/", menu: "Головна" },
  { to: "/price", menu: "Вартість" },
  { to: "/services", menu: "Послуги" },
  { to: "/about", menu: "Про нас" },
  { to: "/contacts", menu: "Контакти" },
];

export const Header = (): JSX.Element => {
  const { open, handleDrawerOpen, handleDrawerClose } = useOpenDrawer();
  const { pathname } = useLocation();

  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          width: "100%",
          height: 68,
          padding: { md: "14px 20px 14px 20px", xs: "14px 20px 14px 20px" },
          backgroundColor: palette.white.main,
          borderBottom: `1px solid ${palette.grey[100]}`,
        }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            height: "100%",
          }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              component="img"
              src="./static/logo.jpeg"
              sx={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
            <Typography variant="h3" color={palette.grey[800]}>
              Бухгалтер і Я
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={5}
            sx={{ display: { xs: "none", sm750: "flex" } }}>
            {menuHeader.map(({ to, menu }, index) => (
              <Stack key={index} sx={{ position: "relative" }}>
                <NavLickCustom to={to} isSelected={pathname === to}>
                  {menu}
                </NavLickCustom>
              </Stack>
            ))}
          </Stack>

          <IconButton sx={{ display: { xs: "block", sm750: "none" } }} onClick={handleDrawerOpen}>
            <RxHamburgerMenu />
          </IconButton>
        </Stack>
      </AppBar>

      <DrawerMenu open={open} onClose={handleDrawerClose} />
    </>
  );
};
