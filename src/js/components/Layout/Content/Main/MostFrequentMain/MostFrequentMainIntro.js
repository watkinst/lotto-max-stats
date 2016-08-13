import React from 'react';

require('../../../../../../sass/mostfrequentmainintro.scss');

export default class MostFrequentMainIntro extends React.Component {
  render() {
    return (
      <div className="col-xs-12 most-frequent-main-intro">
        <h2 className="title">Most Frequent Lotto Max Numbers</h2>
        <p>Here are the most frequent main draw Lotto Max numbers (bonus in green).</p>
      </div>
    );
  }
}