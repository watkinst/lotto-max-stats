import React from 'react';

import Footer from './Footer';
import Header from './Header';
import DataStore from '../stores/DataStore';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      data: DataStore.getData()
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Header title={data.title} tagline={data.tagline} />
        <Footer />
      </div>
    );
  }
}
