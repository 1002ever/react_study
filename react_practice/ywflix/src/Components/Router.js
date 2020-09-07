import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Header from "Components/Header";
import Search from "Routes/Search";


export default () => (
  <Router>
    <>
      <Header />
      {/* 스위치로 감싸면 겹치는 url 중 먼저 발견된 한 컴포넌트만 보여줌 */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/tv/popular" render={() => <h1>Popular</h1>}/>
        <Route path="/search" component={Search} />
        {/* 입력된 url에 해당되는 Route 가 없다면 / 로 redirect */}
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);