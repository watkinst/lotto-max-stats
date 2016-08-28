import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Layout from "./components/Layout";
import Content from './components/Layout/Content';
import Faq from './components/Layout/Faq';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={ Layout }>
      <IndexRoute component={ Content }></IndexRoute>
      <Route path="faq" name="faq" component={ Faq }></Route>
    </Route>
  </Router>,
app);