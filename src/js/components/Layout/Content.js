import React from 'react';
import Main from './Content/Main';
import Sidebar from './Content/Sidebar';

export default class Content extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="row">
            <Main data={this.props.data} />
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}