import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import MainFeaturedPost from "./MainFuturedPost";
import FeaturedPost from "./FeaturedPost";
import { featuredPosts } from "./featuredPosts";
import { mainFeaturedPost } from "./featuredPosts";

const theme = createTheme();

export default function MainPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" style={{ marginBottom: 30 }}>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}
