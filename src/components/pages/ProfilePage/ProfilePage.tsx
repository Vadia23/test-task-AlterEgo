import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { RootState } from "../../../store";
import { toggleIsLogin } from "./profileSlice";

export default function ProfilePage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onExit = () => {
    localStorage.clear();
    history.push("/");
    dispatch(toggleIsLogin(false));
  };
  const { username } = useSelector((state: RootState) => state.profile);

  return (
    <Container>
      <div>
        <Typography component="h2">{`Привіт ${username}!`}</Typography>
        <h2>Its my profile</h2>
        <Stack spacing={2} direction="row">
          <Button onClick={onExit} variant="contained">
            {t("profileBtnExit")}
          </Button>
        </Stack>
      </div>
    </Container>
  );
}
