import React from "react";
import {
  Tooltip,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ChangeLanguageBtns from "./ChangeLanguageBtns";

export default function RightHeaderToolbar() {
  const { t } = useTranslation();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <React.Fragment>
      <ChangeLanguageBtns />
      <Box
        sx={{
          flexGrow: 0,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Tooltip title={t("infoIconText")}>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <AccountCircleIcon fontSize="large" color="info" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <NavLink
            to="/profile"
            style={{ textDecoration: "none", color: "black" }}
            exact
            activeStyle={{
              color: "rgba(43, 166, 237, 1)",
            }}
          >
            <MenuItem key="profile" onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{t("profileBtn")}</Typography>
            </MenuItem>
          </NavLink>
        </Menu>
      </Box>
    </React.Fragment>
  );
}
