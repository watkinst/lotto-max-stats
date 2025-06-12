import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Content from './components/Layout/Content';
import Faq from './components/Layout/Faq';

const app = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={ <Content /> } />
        <Route path="/faq" element={ <Faq /> } />
      </Routes>
    </Layout>
  </BrowserRouter>,
app);