import React from 'react';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

require('../../sass/layout.scss');

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;    
    return (
      <div class="wrapper">
        <Header location={ location } />
        <div className="container-fluid main-content">
          { this.props.children }
        </div>
        <Footer />
      </div>
    );    
  }
}
