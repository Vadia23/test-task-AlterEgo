import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { useHttp } from "../../../hooks/http.hook";
import { RootState } from "../../../store";

const newsAdapter = createEntityAdapter();

const initialState = newsAdapter.getInitialState({
  newsloadingStatus: "idle",
});

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  (start: number = 0) => {
    const { request } = useHttp();
    return request({
      url: `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=10`,
    });
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    newsDeleted: (state, action: PayloadAction<number>) => {
      newsAdapter.removeOne(state, action.payload);
    },
    removeAllNews: (state) => {
      newsAdapter.removeAll(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.newsloadingStatus = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        newsAdapter.setMany(state, action.payload);
        state.newsloadingStatus = "idle";
      })
      .addCase(fetchNews.rejected, (state) => {
        state.newsloadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = newsSlice;

export const { selectAll } = newsAdapter.getSelectors(
  (state: RootState) => state.news
);

export default reducer;

export const { newsDeleted, removeAllNews } = actions;
