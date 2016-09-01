import React from 'react';
import Main from './Content/Main';
import Sidebar from './Content/Sidebar';
import DataStore from '../../stores/DataStore';
import Actions from '../../actions/Actions';

require('../../../sass/content.scss');

export default class Content extends React.Component {
  constructor() {
    super();
    this.interval = null;
    this.state = {
      data: DataStore.getData()
    };
  }

  componentDidMount() {
    Actions.fetchJsonData();
    this.interval = setInterval(Actions.fetchJsonData.bind(this), 300000);
  }

  componentWillMount() {
    DataStore.addChangeListener(this.onChange.bind(this));    
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
    
    if (data) {
      return (
        <div className="row">
          <div className="col-xs-12">
            <div className="content">
              <div className="row">
                <Main data={data} />
                <Sidebar data={data} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}