import React from "react";
import AdbIcon from "@mui/icons-material/Adb";
import {
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LeftHeaderToolbar() {
  const { t } = useTranslation();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const TYPOGRAPHY_STYLES = {
    mr: 2,
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
  };

  return (
    <React.Fragment>
      <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          ...TYPOGRAPHY_STYLES,
          display: { xs: "none", md: "flex" },
        }}
      >
        {t("headerTextLaptop")}
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <NavLink
            to="/"
            style={{ textDecoration: "none", color: "black" }}
            exact
            activeStyle={{
              color: "rgba(43, 166, 237, 1)",
            }}
          >
            <MenuItem key="Home" onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{t("homeBtn")}</Typography>
            </MenuItem>
          </NavLink>
          <NavLink
            to="/news"
            style={{ textDecoration: "none", color: "black" }}
            exact
            activeStyle={{
              color: "rgba(43, 166, 237, 1)",
            }}
          >
            <MenuItem key="News" onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{t("newsBtn")}</Typography>
            </MenuItem>
          </NavLink>
        </Menu>
      </Box>
      <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        sx={{
          ...TYPOGRAPHY_STYLES,
          display: { xs: "flex", md: "none" },
        }}
      >
        {t("headerTextDevice")}
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Button
          key="Home"
          onClick={handleCloseNavMenu}
          sx={{
            my: 2,
            color: "white",
            display: "block",
            border: "1px solid",
            marginRight: 1,
          }}
        >
          <NavLink
            exact
            activeStyle={{
              color: "rgba(43, 166, 237, 1)",
            }}
            to="/"
            style={{ textDecoration: "none", color: "white" }}
          >
            {t("homeBtn")}
          </NavLink>
        </Button>

        <Button
          key="News"
          onClick={handleCloseNavMenu}
          sx={{
            my: 2,
            color: "white",
            display: "block",
            border: "1px solid",
            boxSizing: "border-box",
          }}
        >
          <NavLink
            exact
            activeStyle={{
              color: "rgba(43, 166, 237, 1)",
            }}
            to="/news"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            {t("newsBtn")}
          </NavLink>
        </Button>
      </Box>
    </React.Fragment>
  );
}
