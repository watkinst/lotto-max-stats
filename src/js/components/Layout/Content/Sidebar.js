import React from 'react';
import TotalDraws from './Sidebar/TotalDraws';
import GrandTotalPayout from './Sidebar/GrandTotalPayout';
import GrandTotalPrizes from './Sidebar/GrandTotalPrizes';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="col-xs-12 col-lg-3">
        <div className="row">
          <GrandTotalPayout data={this.props.data} />
          <GrandTotalPrizes data={this.props.data} />
          <TotalDraws data={this.props.data} />
        </div>
      </div>
    );
  }
}