import React from 'react';
import MostFrequentCombinedIntro from './MostFrequentCombined/MostFrequentCombinedIntro';
import MostFrequentCombinedNumbers from './MostFrequentCombined/MostFrequentCombinedNumbers';

require('../../../../../../sass/mostfrequentcombined.scss');

export default class MostFrequentCombined extends React.Component {

  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-12">
        <div className="most-frequent-combined-container">
          <div className="row">
            <MostFrequentCombinedIntro />
            <MostFrequentCombinedNumbers calculateTimesDrawn={this.props.calculateTimesDrawn}
                                         getMostFrequentNumbers={this.props.getMostFrequentNumbers}
                                         getMostFrequentBonusNumber={this.props.getMostFrequentBonusNumber} />
          </div>
        </div>
      </div>
    );
  }
}
