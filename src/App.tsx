import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import MainPage from "./components/pages/MainPage/MainPage";
import NewsPage from "./components/pages/NewsPage/NewsPage";
import ProfilePage from "./components/pages/ProfilePage/ProfilePage";
import Header from "./components/Header/Header";
import SignIn from "./components/pages/SignInPage/SignInPage";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const { isLogin } = useSelector((state: RootState) => state.profile);
  const isLogLocStorage = localStorage.getItem("isLogin");

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/news">
          <NewsPage />
        </Route>
        <Route exact path="/profile">
          {isLogin || isLogLocStorage === "true" ? (
            <ProfilePage />
          ) : (
            <Redirect to="/signIn" />
          )}
        </Route>
        <Route exact path="/signIn">
          <SignIn />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
