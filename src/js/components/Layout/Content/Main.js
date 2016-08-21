import React from 'react';
import Sim from './Main/Sim';
import LastWinning from './Main/LastWinning';
import MostFrequent from './Main/MostFrequent';
import PayoutStats from './Main/PayoutStats';

export default class Main extends React.Component {

  render() {
    return (
      <div className="col-xs-12 col-lg-9">
        <div className="row">
          <Sim />
          <div className="col-xs-12 col-md-6">
            <div className="row">
              <LastWinning data={this.props.data} />
              <MostFrequent data={this.props.data} />
            </div>
          </div>
        </div>
        <div className="row">
          <PayoutStats data={this.props.data} />
        </div>
      </div>
    );
  }
}