import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";

import { RootState, useAppDispatch } from "../../../store";
import SignInLinks from "./SignInLinks";
import SignInFormHeader from "./SignInFormHeader";
import { toggleIsLogin } from "../ProfilePage/profileSlice";

const JUST_LETTERS = /^[a-z]+$/;

export default function SignInForm() {
  const { username, password } = useSelector(
    (state: RootState) => state.profile
  );

  const [authError, setAuthError] = useState(false);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const USERNAME_VALIDATION_ERROR = t("authUsernameErrorText");
  const REQUIRED_VALIDATION_ERROR = t("authErrorRequired");

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required(REQUIRED_VALIDATION_ERROR)
      .matches(JUST_LETTERS, USERNAME_VALIDATION_ERROR),
    password: yup.string().required(REQUIRED_VALIDATION_ERROR),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      if (
        values.username === username &&
        values.password === password.toString()
      ) {
        dispatch(toggleIsLogin(true));
        localStorage.setItem("isLogin", "true");
        history.push("/profile");
        return;
      }
      setAuthError(true);
    },
    validationSchema: validationSchema,
  });

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <SignInFormHeader />

      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          id="login"
          label={t("nameTextField")}
          name="username"
          autoComplete="login"
          margin="normal"
          error={
            authError ||
            (formik.touched.username && Boolean(formik.errors.username))
          }
          helperText={
            !authError && formik.touched.username && formik.errors.username
          }
          onChange={formik.handleChange}
          value={formik.values.username}
          required
          fullWidth
          autoFocus
        />
        <TextField
          id="password"
          label={t("passwordTextField")}
          name="password"
          type="password"
          autoComplete="current-password"
          margin="normal"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={
            authError ||
            (formik.touched.password && Boolean(formik.errors.password))
          }
          helperText={
            !authError && formik.touched.password && formik.errors.password
          }
          required
          fullWidth
        />
        {authError && (
          <Typography component="div" color="red" align="center">
            {t("authError")}
          </Typography>
        )}
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label={t("checkboxText")}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {t("authBtnSignIn")}
        </Button>
        <SignInLinks />
      </Box>
    </Box>
  );
}
