import React from 'react';
import TotalDraws from './Sidebar/TotalDraws';
import GrandTotalPayout from './Sidebar/GrandTotalPayout';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-lg-3">
        <div className="row">
          <TotalDraws data={this.props.data} />
          <GrandTotalPayout data={this.props.data} />
        </div>
      </div>
    );
  }
}