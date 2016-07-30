import React from 'react';
import Header from './Layout/Header';
import Content from './Layout/Content';
import Footer from './Layout/Footer';
import DataStore from '../stores/DataStore';
import Actions from '../actions/Actions';

require('../../sass/layout.scss');

export default class Layout extends React.Component {
  constructor() {
    super();
    this.interval = null;
    this.state = {
      data: DataStore.getData()
    };
  }

  componentDidMount() {
    this.interval = setInterval(Actions.fetchJsonData.bind(this), 120000);
  }

  componentWillMount() {
    DataStore.addChangeListener(this.onChange.bind(this));
    Actions.fetchJsonData();
  }

  componentWillUnmount() {
    DataStore.removeChangeListener(this.onChange.bind(this));
    clearInterval(this.interval);
  }

  onChange() {
    this.setState({
      data: DataStore.getData()
    });
  }

  render() {
    const { data } = this.state;
    console.log(data);
    if (data) {
      return (
        <div>
          <Header />
          <div className="container-fluid">
            <Content data={data.draws} />
          </div>
          <Footer />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
