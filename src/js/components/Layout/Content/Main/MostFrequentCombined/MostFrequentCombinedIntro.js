import React from 'react';

require('../../../../../../sass/mostfrequentcombinedintro.scss');

export default class MostFrequentCombinedIntro extends React.Component {
  render() {
    return (
      <div className="col-xs-12 most-frequent-combined-intro">
        <h2 className="title">Most Frequent Combined Numbers</h2>
        <p>Here are the most frequent combined Lotto Max and Max Millions draw numbers (bonus in green).</p>
      </div>
    );
  }
}