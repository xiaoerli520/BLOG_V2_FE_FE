import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Users from "./routes/Users.js";

import Button from "./routes/Button.js";

import Index from "./routes/Index.js";

import List from "./routes/List.js";

import NotFound from "./routes/NotFound.js";

import Detail from "./routes/Detail.js";

import Techs from "./routes/Techs.js";

import About from "./routes/About.js";

import Newlayout from "./routes/Newlayout.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/users" component={Users} />
      <Route path="/button" component={Button} />
      <Route path="/index" component={Index} />
      <Route path="/List" component={List} />
      <Route path="/techs" component={List} />
      <Route path="/Linux" component={List} />
      <Route path="/Detail" component={Detail} />
      <Route path="/FDetail" component={Detail} />
      <Route path="/LDetail" component={Detail} />
      <Route path="/about" component={About} />
      <Route path="/newlayout" component={Newlayout} />
      <Route path="/*" component={NotFound} />
    </Router>
  );
}

export default RouterConfig;
