import * as React from "react";
import {
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
  Card,
  Grid,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { IFeaturedPostProps } from "../../../types";

export default function FeaturedPost(props: IFeaturedPostProps) {
  const { post } = props;

  const { t } = useTranslation();

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ maxWidth: "100%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={post.image}
            alt={post.imageLabel}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ height: 100 }}
            >
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.description.slice(0, 100) + "..."}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {t("mainPageItemBtn")}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
