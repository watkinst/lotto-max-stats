import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Content from './components/Layout/Content';
import Faq from './components/Layout/Faq';

const app = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={ Content }></Route>
        <Route path="/faq" name="faq" component={ Faq }></Route>
      </Switch>
    </Layout>
  </BrowserRouter>,
app);