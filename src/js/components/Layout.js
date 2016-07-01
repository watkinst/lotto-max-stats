import React from 'react';
import Header from './Layout/Header';
import Content from './Layout/Content';
import Footer from './Layout/Footer';
import DataStore from '../stores/DataStore';
import Actions from '../actions/Actions';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      data: DataStore.getData()
    };
  }

  componentDidMount() {
    setInterval(Actions.fetchData.bind(this), 120000);
  }

  componentWillMount() {
    DataStore.addChangeListener(this.onChange.bind(this));
    Actions.fetchData();
  }

  componentWillUnmount() {
    DataStore.removeChangeListener(this.onChange.bind(this));
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
