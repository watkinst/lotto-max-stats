import React from 'react';

require('../../../../../../sass/mostfrequentmaxmillionsintro.scss');

export default class MostFrequentMaxMillionsIntro extends React.Component {
  render() {
    return (
      <div className="col-xs-12 most-frequent-max-millions-intro">
        <h2 className="title">Most Frequent Numbers</h2>
        <p>Here are the most frequent MaxMillions draw numbers (bonus does not apply).</p>
      </div>
    );
  }
}