import { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Stack,
  Container,
  createTheme,
  ThemeProvider,
  CircularProgress,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { RootState, useAppDispatch } from "../../../store";
import { fetchNews, selectAll, removeAllNews } from "./newsSlice";
import NewsCard from "./NewsCard";

const theme = createTheme();

export default function Album() {
  const [start, setStart] = useState(10);
  const [newNewsLoaging, setNewNewsLoaging] = useState(false);
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const newsLoadingStatus = useSelector(
    (state: RootState) => state.news.newsloadingStatus
  );
  const news = useSelector(selectAll);

  useEffect(() => {
    dispatch(fetchNews());

    return () => {
      setStart(10);
      dispatch(removeAllNews());
      setNewNewsLoaging(false);
    };
    // eslint-disable-next-line
  }, []);

  const onLoadMoreClick = () => {
    setNewNewsLoaging(true);
    dispatch(fetchNews(start));
    setStart((prev) => prev + 10);
  };

  if (newsLoadingStatus === "loading" && !newNewsLoaging) {
    return (
      <Container maxWidth="md" style={{ marginBottom: 30 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <main>
        <Container maxWidth="md" style={{ marginBottom: 30 }}>
          <Grid container spacing={4}>
            {news.map((el: any) => (
              <NewsCard
                key={el.id}
                id={el.id}
                title={el.title}
                body={el.body}
              />
            ))}
          </Grid>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              <Button variant="contained">{t("backToHomeText")}</Button>
            </Link>

            <Button onClick={onLoadMoreClick} variant="outlined">
              {t("newsItemDownloadBtn")}
            </Button>
          </Stack>
        </Container>
      </main>
    </ThemeProvider>
  );
}
