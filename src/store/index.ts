import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import posts from "../components/pages/MainPage/postsSlice";
import news from "../components/pages/NewsPage/newsSlice";
import profile from "../components/pages/ProfilePage/profileSlice";

const store = configureStore({
  reducer: combineReducers({ posts, news, profile }),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
