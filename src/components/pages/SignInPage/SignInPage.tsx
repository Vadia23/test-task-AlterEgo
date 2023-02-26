import React from "react";
import {
  CssBaseline,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import SignInForm from "./SignInForm";

const theme = createTheme();

export default function SignIn() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <SignInForm /> {/* Form Component */}
      </Container>
    </ThemeProvider>
  );
}
