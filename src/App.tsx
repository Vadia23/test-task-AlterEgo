import React, { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import MainPage from "./components/pages/MainPage/MainPage";
import NewsPage from "./components/pages/NewsPage/NewsPage";
import ProfilePage from "./components/pages/ProfilePage/ProfilePage";
import Header from "./components/Header";
import SignIn from "./components/pages/ProfilePage/SignIn";

function App() {
  const [isLogin, setIsLogin] = useState(false);

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
          {isLogin ? <ProfilePage /> : <Redirect to="/signIn" />}
        </Route>
        <Route exact path="/signIn">
          <SignIn />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
