import React from 'react';
import Header from './Layout/Header';
import Content from './Layout/Content';
import Footer from './Layout/Footer';
import DataStore from '../stores/DataStore';
import Actions from '../actions/Actions';

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
          <Header title={data.header.title} tagline={data.header.tagline} />
          <Content data={data.draws} />
          <Footer />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
