import React from "react";
import { Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useTranslation } from "react-i18next";

export default function SignInFormHeader() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {t("authText")}
      </Typography>
    </React.Fragment>
  );
}
