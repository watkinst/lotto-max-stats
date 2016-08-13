import React from 'react';
import MostFrequentMainIntro from './MostFrequentMain/MostFrequentMainIntro';
import MostFrequentMainNumbers from './MostFrequentMain/MostFrequentMainNumbers';

require('../../../../../sass/mostfrequentmain.scss');

export default class MostFrequentMain extends React.Component {

  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-12">
        <div className="most-frequent-main-container">
          <div className="row">
            <MostFrequentMainIntro />
            <MostFrequentMainNumbers data={this.props.data} />
          </div>
        </div>
      </div>
    );
  }
}
