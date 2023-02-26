import * as React from "react";
import { CssBaseline, Grid, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";

import MainFeaturedPost from "./MainFuturedPost";
import FeaturedPost from "./FeaturedPost";
import { RootState } from "../../../store";

const theme = createTheme();

export default function MainPage() {
  const { mainFeaturedPost, featuredPosts } = useSelector(
    (state: RootState) => state.posts
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" style={{ marginBottom: 30 }}>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post: any) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}
