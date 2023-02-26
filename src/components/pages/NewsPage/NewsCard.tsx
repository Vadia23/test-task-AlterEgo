import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { INewsCardProps } from "../../../types";
import { useAppDispatch } from "../../../store";
import { newsDeleted } from "./newsSlice";

export default function NewsCard(props: INewsCardProps) {
  const { id, title, body } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  return (
    <Grid item xs={12} sm={6} md={6}>
      <Card
        sx={{
          minHeight: 430,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ minHeight: 100, marginBottom: 10 }}
          >
            {title.length > 60 ? title.slice(0, 60) + " ..." : title}
          </Typography>
          <Typography>
            {body.length > 100 ? body.slice(0, 100) + " ..." : body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{t("newsItemLookBtn")}</Button>
          <Button
            size="small"
            onClick={() => dispatch(newsDeleted(id))}
            style={{ color: "red" }}
          >
            {t("newsItemDeleteBtn")}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
