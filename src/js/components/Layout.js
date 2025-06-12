import React from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

require('../../sass/layout.scss');

const Layout = ({ children }) => {    
  return (
    <div className="wrapper">
      <Header />
      <div className="container-fluid main-content">
        { children }
      </div>
      <Footer />
    </div>
  );    
}

export default Layout;
