import React from 'react';
import Accordion from './Faq/Accordion';
//import DataStore from '../../stores/DataStore';
//import Actions from '../../actions/Actions';

require('../../../sass/faq.scss');

export default class Faq extends React.Component {
  /*constructor() {
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
  }*/

  render() {
    //const { data } = this.state;

    //if (data) {
      return (
        <div className="row">
          <div className="col-xs-12 col-md-6 col-md-push-3">
            <div className="about">
              <Accordion />
            </div>
          </div>
        </div>
      );
    /*} else {
      return <div></div>;
    }*/
  }
}