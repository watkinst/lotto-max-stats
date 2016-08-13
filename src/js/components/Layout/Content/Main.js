import React from 'react';
import Sim from './Main/Sim';
import LastWinning from './Main/LastWinning';
import MostFrequentCombined from './Main/MostFrequentCombined';
import MostFrequentMain from './Main/MostFrequentMain';
import MostFrequentMaxMillions from './Main/MostFrequentMaxMillions';

export default class Main extends React.Component {

  render() {
    return (
      <div className="col-xs-12 col-lg-9">
        <div className="row">
          <Sim />
          <div className="col-xs-12 col-md-6">
            <div className="row">
              <LastWinning data={this.props.data} />
              <MostFrequentCombined data={this.props.data} />
              <MostFrequentMain data={this.props.data} />
              <MostFrequentMaxMillions data={this.props.data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}