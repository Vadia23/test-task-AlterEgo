import * as React from "react";
import { AppBar, Toolbar, Container } from "@mui/material";

import LeftHeaderToolbar from "./LeftHeaderToolbar";
import RightHeaderToolbar from "./RightHeaderToolbar";

function Header() {
  return (
    <AppBar
      position="static"
      style={{ marginBottom: 30, backgroundColor: "rgba(34, 7, 168, 0.9)" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LeftHeaderToolbar />
          <RightHeaderToolbar />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
