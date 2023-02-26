import React from "react";
import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function SignInLinks() {
  const { t } = useTranslation();
  return (
    <Grid container>
      <Grid item xs>
        <Link to="#" style={{ color: "blue" }}>
          {t("authLinkForgotPass")}
        </Link>
      </Grid>
      <Grid item>
        <Link to="#" style={{ color: "blue" }}>
          {t("authLinkNoProfile")}
        </Link>
      </Grid>
      <Grid
        container
        style={{
          marginTop: 10,
        }}
      >
        <Grid item>
          <Link to="/" style={{ color: "blue" }}>
            {t("backToHomeText")}
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
