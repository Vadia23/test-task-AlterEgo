import * as React from "react";
import { Paper, Typography, Grid, Link, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import { IMainFeaturedPostProps } from "../../../types";

export default function MainFeaturedPost(props: IMainFeaturedPostProps) {
  const { post } = props;
  const { t } = useTranslation();

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${post.image})`,
      }}
    >
      {
        <img
          style={{ display: "none" }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography variant="h5" color="#eeedf0" paragraph>
              {post.description}
            </Typography>
            <Link
              variant="subtitle1"
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                backgroundColor: "rgba(193, 191, 201, 0.6)",
                padding: 5,
                borderRadius: 5,
              }}
            >
              {t("mainPageItemBtn")}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
